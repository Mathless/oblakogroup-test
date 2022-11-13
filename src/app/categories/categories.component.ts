import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { categoryWithTask } from '../utils/types';
import { DataSharingService } from '../services/datasharing.service';

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
  constructor(
    private apollo: Apollo,
    private _dataSharingService: DataSharingService
  ) {
    _dataSharingService.changeEmitted$.subscribe((value) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.apollo
      .query({
        query: queryGetAll
      })
      .subscribe((result: any) => {
        this.categoriesWithTasks = result?.data?.categories;
      });
  }
}
