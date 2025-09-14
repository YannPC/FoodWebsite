import { Component, OnInit, Inject } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../service/food/food';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  foods: Food[] = [];
  //constructor(@Inject(FoodService) private food: FoodService) {}
   constructor(private foodService: FoodService) {}

// foods is my array and Food is the service
ngOnInit(): void{
  this.foods = this.foodService.getAll();

}


}
