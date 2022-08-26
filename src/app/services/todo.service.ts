import { Injectable } from '@angular/core';
import { todo } from '../utils/types';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // eslint-disable-next-line no-unused-vars
  constructor(private apollo: Apollo) {}
  changeTaskState(task: todo) {
    const queryChangeState = gql`
      mutation{
        updateTodo(input:{
          id:${task.id}
          text:${task.text}
        }){
          id
          isCompleted
          text
        }
      }
    `;
  }
}
