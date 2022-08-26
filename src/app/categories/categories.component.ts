import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { categoryWithTask } from '../utils/types';

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

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesWithTasks: categoryWithTask[] = [];

  // eslint-disable-next-line no-unused-vars
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: queryGetAll
      })
      .valueChanges.subscribe((result: any) => {
        this.categoriesWithTasks = result?.data?.categories;
      });
  }
}
