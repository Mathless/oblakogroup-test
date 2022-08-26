import { Component, Input } from '@angular/core';
import { todo } from '../../utils/types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() tasks: todo[] | undefined;

  constructor() {}

  changeTaskState(task: todo) {
    alert(task.isCompleted);
  }
}
