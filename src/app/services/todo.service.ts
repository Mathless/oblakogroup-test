import { Injectable } from '@angular/core';
import { categoryWithTask, todo } from '../utils/types';
import { Apollo, gql } from 'apollo-angular';
import { CategoriesComponent } from '../categories/categories.component';
import { Subscription } from 'rxjs';

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
  // eslint-disable-next-line no-unused-vars
  private categoriesWithTasks: categoryWithTask[] = [];
  constructor(private apollo: Apollo) {}
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
        this.categoriesWithTasks = result?.data?.categories;
      });
  }
}
