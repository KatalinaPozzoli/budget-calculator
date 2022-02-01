import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BudgetItem} from '../shared/models/budget-item.models';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output()
  formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  form = new FormGroup({
    description: new FormControl(),
    amount: new FormControl()
  });

  isNewItem = true;

  checked = true;

  constructor() {
  }

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
      this.form.patchValue({description: this.item.description, amount: this.item.amount});
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.formSubmit.emit(new BudgetItem(this.form.value.description, this.form.value.amount, this.checked ? 'EXPENSE' : 'INCOME'));
    this.form.reset();
  }
}
