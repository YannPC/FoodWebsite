import { Component, OnInit } from '@angular/core';
import { Food } from '../service/food/food';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  foods:String[] = [];
  constructor(private food:Food) {}

// foods is my array and Food is the service
ngOnInit(): void{
  this.foods = this.food.getAll();
  
}


}
