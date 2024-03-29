import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { BudgetItem } from 'src/app/shared/models/budget-item.models';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onXButtonClick(): void {
    this.xButtonClick.emit();
  }
  onCardClick(): void{
    this.cardClick.emit();
  }
}
