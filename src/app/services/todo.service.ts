import { Injectable } from '@angular/core';
import { categoryWithTask, todo } from '../utils/types';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // eslint-disable-next-line no-unused-vars
  constructor(private apollo: Apollo) {}
  changeTaskState(task: todo) {
    const queryChangeState = gql`
      mutation updateToDo($taskId: String!, $isCompleted: Boolean) {
        updateTodo(input: { id: $taskId, isCompleted: $isCompleted }) {
          id
          isCompleted
          text
        }
      }
    `;
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
}
