import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glassmorphism-card',
  templateUrl: './glassmorphism-card.component.html',
  styleUrls: ['./glassmorphism-card.component.css'],
})
export class GlassmorphismCardComponent {
  @Input() item: any;
  constructor() {}
}
