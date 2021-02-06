import { Component, ViewChild } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  @ViewChild('shoppingCartComponent') public shoppingCartComponent!:ShoppingCartComponent;
  constructor(){
  }  
  /**
    * sends to shopping card child a new product in order to be added on it
    * @param product : product in order to be added by shopping cart component
  */
  addProduct(product: any) {
    this.shoppingCartComponent.addProduct(product);
  }
}
