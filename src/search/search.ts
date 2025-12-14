import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  searchTerm: string = '';

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const searchTerm = params['searchTerm'] || '';
      this.searchTerm = searchTerm;
    });
  }

  //ActivatedRoute it's for reading the route parameters
  // router is for writting in the route
  search(): void {
    if (this.searchTerm) {
      this.router.navigate(['/search', this.searchTerm]);
    } else {
      this.router.navigate(['']);
    }
  }
}

// One way bidding problems with search term:
// you couldn't get the value user will type in the input field
// and you couldn't navigate to the search results page
// because there was no way to trigger the search function when user types in the input field.

// in the html we had:
// <input type="text" placeholder="Search foods..." [value]="searchTerm"  />

// there is two type of data binding in angular:
// One way binding: from component to the view (using [value]="searchTerm")
// we have two directional binding:
// component  <---->   view property biddin, interpolation
// view to component  <---- view event binding (using (click) (change)="search()")
// Two way binding: from component to the view and from the view to the component (using [(ngModel)]="searchTerm")     \

// two way binding we have both of them at the same time event bidding that will show by paraenthese  and property binding that will show by quare brackets

// To fix this we use two way binding with ngModel directive
// and we also add a button to trigger the search function when clicked.
