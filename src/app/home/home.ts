import { Component, inject} from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  foods: Food[] = [];
FoodService = inject(FoodService);

// foods is my array and Food is the service
ngOnInit(): void{
  this.foods = this.FoodService.getAll();
}


}
