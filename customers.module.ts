import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCrudComponent } from './customer-crud/customer-crud.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCrudComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CustomerListComponent]
})
export class CustomersModule { }
