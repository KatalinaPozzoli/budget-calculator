import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {AddItemFormComponent} from './add-item-form/add-item-form.component';
import {BudgetItemListComponent} from './budget-item-list/budget-item-list.component';
import {BudgetItemCardComponent} from './budget-item-list/budget-item-card/budget-item-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import {EditItemModalComponent} from './edit-item-modal/edit-item-modal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DragDropModule
  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
