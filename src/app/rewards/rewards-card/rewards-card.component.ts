import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-rewards-card',
  standalone: true,
  imports: [],
  templateUrl: './rewards-card.component.html',
  styleUrl: './rewards-card.component.scss'
})
export class RewardsCardComponent {
  @Input() title: string = 'Discount on municipal taxes';
  @Input() action: string = 'Start';
}
