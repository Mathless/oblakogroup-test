import { Injectable } from '@angular/core';
import { categoryWithTask, createTask, todo } from '../utils/types';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { DataSharingService } from './datasharing.service';
const queryAddTask = gql`
  mutation createTodo($categoryName: String!, $text: String!) {
    createTodo(input: { categoryName: $categoryName, text: $text }) {
      id
    }
  }
`;

const queryGetAll = gql`
  query {
    categories {
      title
      id
      todos {
        isCompleted
        text
        id
      }
    }
  }
`;

const queryChangeState = gql`
  mutation updateToDo($taskId: String!, $isCompleted: Boolean) {
    updateTodo(input: { id: $taskId, isCompleted: $isCompleted }) {
      id
      isCompleted
      text
    }
  }
`;
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private categoriesWithTasks: categoryWithTask[] = [];
  constructor(
    private apollo: Apollo,
    private _dataSharingService: DataSharingService
  ) {}
  addTask(createTask: createTask) {
    this.apollo
      .mutate({
        mutation: queryAddTask,
        variables: {
          categoryName: createTask.categoryName,
          text: createTask.text
        }
      })
      .pipe()
      .subscribe((res) => {
        if (!res.loading) {
          this._dataSharingService.emitChange(createTask.categoryName);
        }
      });
  }

  changeTaskState(task: todo) {
    this.apollo
      .mutate({
        mutation: queryChangeState,
        variables: {
          taskId: task.id,
          isCompleted: !task.isCompleted
        }
      })
      .subscribe();
  }

  getAllCategories(): Subscription {
    return this.apollo
      .watchQuery({
        query: queryGetAll
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.categoriesWithTasks = result?.data?.categories;
      });
  }
}
