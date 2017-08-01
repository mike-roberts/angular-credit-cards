import { Component, Input } from '@angular/core';
import { CardData } from './card-data.model';

@Component({
  selector: 'credit-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss']
})
export class CardComponent {
  @Input()
  cardData: CardData;

  constructor() {}

}
