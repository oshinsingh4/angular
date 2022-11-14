import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers = Array<Customer>();


  constructor(private _cs:CustomerService) 
  {
    this.getCustomersFromService();
   }
   getCustomersFromService(){
     this._cs.getCustomersFromAPI()
     .subscribe(response=>this.customers=response);
   }

  ngOnInit(): void {
  }

}
