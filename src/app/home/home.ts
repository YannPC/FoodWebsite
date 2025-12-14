import { Component, inject } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/models/food';
import { LOCALSTORAGE } from '../app-module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  foods: Food[] = [];
  foodService = inject(FoodService);
  private storage = inject(LOCALSTORAGE);
  private route = inject(ActivatedRoute);

  // foods is my array and Food is the service
  ngOnInit(): void {
    this.foods = this.foodService.getAll();

    try {
      const stored = this.storage.getItem('foodRatings');
      const ratings: Record<string, number> = stored ? JSON.parse(stored) : {};

      this.foods.forEach((f) => {
        const key = (f as any).id ?? f.name;
        if (ratings[key] != null) {
          f.stars = ratings[key];
        }
      });
    } catch (e) {
      console.error('Error loading food ratings from localStorage', e);
    }

    this.route.params.subscribe((params) => {
      const searchTerm = params['searchTerm'];
      if (searchTerm) {
        this.foods = this.foodService
          .getAll()
          .filter((food) => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }

  onRate(food: Food, rating: number) {
    food.stars = rating;

    try {
      const stored = this.storage.getItem('foodRatings'); // use this.storage
      const ratings: Record<string, number> = stored ? JSON.parse(stored) : {};

      const key = (food as any).id ?? food.name;
      ratings[key] = rating;
      this.storage.setItem('foodRatings', JSON.stringify(ratings)); // use this.storage
    } catch (e) {
      console.error('Error saving rating to storage', e);
    }
  }
}
