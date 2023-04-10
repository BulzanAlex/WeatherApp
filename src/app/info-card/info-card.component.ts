import { Component, Input } from '@angular/core';
// import { precipitation } from '../../app/app.component'

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() cardName = 'string';
  @Input() iconUrl = 'string';
  @Input() cardValue: number | string= '' ;
}
