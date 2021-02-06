import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<any>= 
   [
    {
    name: 'Sledgehammer',
    price: 125.75
    },
    {
    name: 'Axe',
    price: 190.50
    },
    {
    name: 'Bandsaw',
    price: 562.13
    },
    {
    name: 'Chisel',
    price: 12.9
    },
    {
    name: 'Hacksaw',
    price: 18.45
    }
    ];

  constructor() { }

  public getAll()
  {
    return this.products;
  }
}
