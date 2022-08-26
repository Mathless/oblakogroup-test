import { Component, Input } from '@angular/core';
import { todo } from '../../utils/types';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() tasks: todo[] | undefined;

  // eslint-disable-next-line no-unused-vars
  constructor(private todoService: TodoService) {}
  changeTaskState(task: todo) {
    this.todoService.changeTaskState(task);
  }
}
