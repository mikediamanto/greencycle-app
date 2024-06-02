import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rewards-card-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './rewards-card-item.component.html',
  styleUrl: './rewards-card-item.component.scss'
})
export class RewardsCardItemComponent {
  @Input() points: number = 500;
  @Input() name = 'some information here for'
}
