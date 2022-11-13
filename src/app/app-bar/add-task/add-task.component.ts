import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  AddTaskForm: FormGroup;
  task: string;
  category: string;
  constructor(
    private apollo: Apollo,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {
    if (this.isFormValid()) {
      this.todoService.addTask({
        categoryName: this.AddTaskForm.controls['category']?.value,
        text: this.AddTaskForm.controls['task']?.value
      });
      this.dialogRef.close();
    }
  }

  private isFormValid() {
    const controls = this.AddTaskForm.controls;

    if (this.AddTaskForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );

      return false;
    }
    return true;
  }

  private initForm() {
    this.AddTaskForm = this.fb.group({
      category: ['', [Validators.required]],
      task: ['', [Validators.required]]
    });
  }

  addTask(param: { task: string; category: string }) {
    this.todoService.addTask({
      categoryName: param.category,
      text: param.task
    });
  }
}
