import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  readonly CART = "SHOPPING_CART" ;

  public add(shoppingCart : Array<any>)
  {    
    localStorage.setItem(this.CART, JSON.stringify(shoppingCart));
  }

  public get()
  {
    let shoppingCart = localStorage.getItem(this.CART);
    if (shoppingCart != null)
      return JSON.parse(shoppingCart);
  }
}
