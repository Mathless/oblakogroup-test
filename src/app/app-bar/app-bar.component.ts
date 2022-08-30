import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent);

    dialogRef
      .afterClosed()
      .subscribe((result: { category: string; task: string }) => {
        console.log(
          `Dialog result: ${
            result?.category?.toString() + ' ' + result?.task?.toString()
          }`
        );
      });
  }
}
