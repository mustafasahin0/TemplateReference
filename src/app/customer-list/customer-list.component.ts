import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  selectedCustomer!: Customer;

  customers: Customer[] = [
    {customerNo: 1, name: 'Mustafa Sahin', address: '1127 New Street', city: 'London', country: 'UK'},
    {customerNo: 2, name: 'Mustafa Sahin', address: '1127 New Street', city: 'London', country: 'USA'},
    {customerNo: 3, name: 'Mustafa Sahin', address: '1127 New Street', city: 'London', country: 'Germany'},
    {customerNo: 4, name: 'Mustafa Sahin', address: '1127 New Street', city: 'London', country: 'India'},
    {customerNo: 5, name: 'Mustafa Sahin', address: '1127 New Street', city: 'London', country: 'Turkey'},
    {customerNo: 6, name: 'Mustafa Sahin', address: '1127 New Street', city: 'London', country: 'Canada'}

  ]
}
