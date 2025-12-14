import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
  searchTerm: string = '';
  ngOnInit(): void {}
}
