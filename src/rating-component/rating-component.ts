import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  imports: [NgFor],
  templateUrl: './rating-component.html',
  styleUrl: './rating-component.css'
})
export class RatingComponent {
  @Input() value = 0;
  @Input() totalstars = 5;
  @Input() readonly = false;
  @Output() rate = new EventEmitter<number>();

  getStars(): boolean[] {
    return Array.from({ length: this.totalstars }, (_, i) => i < Math.round(this.value));
  }

  onClick(index: number) {
    if (this.readonly) return;
    this.value = index + 1;
    this.rate.emit(this.value);
  }
}
