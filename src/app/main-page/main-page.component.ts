import {Component, OnInit} from '@angular/core';
import {UpdateEvent} from '../budget-item-list/budget-item-list.component';
import {BudgetItem} from '../shared/models/budget-item.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem): void {
    this.budgetItems.push(newItem);
    this.recalculate();
  }

  deleteItem(item: BudgetItem): void {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.recalculate();
  }

  updateItem(updateEvent: UpdateEvent): void {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;
    this.recalculate();
  }

  recalculate(): void {
    this.totalBudget = this.budgetItems.reduce((total, item) => {
      const discriminator = item.type === 'INCOME' ? 1 : -1;
      return total + item.amount * discriminator;
    }, 0);
  }
}
