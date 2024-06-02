import { Component, Signal, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recycle-widget',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recycle-widget.component.html',
  styleUrl: './recycle-widget.component.scss'
})
export class RecycleWidgetComponent {
  visible = signal(false);


  complete = () => this.visible.set(true);
}
