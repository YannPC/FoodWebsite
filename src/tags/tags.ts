import { Component, inject, OnInit } from '@angular/core';
import { Tag } from '../app/shared/models/Tag';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { AppRoutingModule } from '../app/app-routing-module';
import { FoodService } from '../app/service/food/food.service';

@Component({
  selector: 'app-tags',
  imports: [BrowserModule, NgIf, AppRoutingModule],
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class Tags implements OnInit {
  tags: Tag[] = [];

  private foodservice = inject(FoodService);

  ngOnInit(): void {
    this.tags = this.foodservice.getAllTags();
  }
}
