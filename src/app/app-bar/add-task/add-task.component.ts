import { Component, ElementRef, ViewChild } from '@angular/core';
import { category } from '../../utils/types';
import { Apollo, gql } from 'apollo-angular';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';

const queryGetCategories = gql`
  query {
    categories {
      title
      id
    }
  }
`;

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  categoriesName: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryControl = new FormControl('');
  filteredCategories: Observable<string[]>;
  fruit: string = '';

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('taskInput') taskInput: ElementRef<HTMLInputElement>;
  task: string;

  constructor(private apollo: Apollo) {
    this.filteredCategories = this.categoryControl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.categoriesName.slice()
      )
    );
  }
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: queryGetCategories
      })
      .valueChanges.subscribe((result: any) => {
        this.categoriesName = result?.data?.categories.map(
          (x: category) => x.title
        );
        this.categoryControl.setValue(null);
      });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruit = value;
    }

    // Clear the input value
    event.chipInput!.clear();

    this.categoryControl.setValue(null);
  }

  remove(): void {
    this.fruit = '';
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruit = event.option.viewValue;
    this.fruitInput.nativeElement.value = '';
    this.categoryControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.categoriesName.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }
}
