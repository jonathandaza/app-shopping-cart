import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  readonly CART = 'SHOPPING_CART';

  /**
   * adds a shopping cart collection to local storage
   * @param shoppingCart a collection of kind 'shopping cart'
   */
  public add(shoppingCart :Array<any>)
  {    
    localStorage.setItem(this.CART, JSON.stringify(shoppingCart));
  }

  /**
   * gets the shopping cart collection from local storage
   */
  public get()
  {
    const shoppingCart = localStorage.getItem(this.CART);
    if (shoppingCart)
      return JSON.parse(shoppingCart);
  }
}
