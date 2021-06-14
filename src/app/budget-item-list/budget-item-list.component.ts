import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.models';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit{
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.budgetItems, event.previousIndex, event.currentIndex);
  }
  // tslint:disable-next-line:typedef
  OnDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }
  // tslint:disable-next-line:typedef
  onCardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });
    const subs = dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result,
        });
        subs.unsubscribe();
      }
    });
  }
}

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
