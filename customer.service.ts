import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers =  Array<Customer>();
  url="http://localhost:3000/customers";
  constructor(private http:HttpClient) {

   }
   getCustomersFromAPI(){
     return this.http.get<Customer[]>(this.url);
   }
}
