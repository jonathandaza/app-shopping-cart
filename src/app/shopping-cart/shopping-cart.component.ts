import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../share/services/product.service';
import { LocalStorageService } from '../share/services/local-storage.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  total: number = 0;
  products: Array<any>= new Array<any>();
  shoppingCarts: Array<any> = new Array<any>();

  constructor(
    private productService: ProductService,
    private localStorageService: LocalStorageService,
  ) { 

  }
  
  ngOnInit(): void {
    this.loadCart();
  }

  /*
    removes a product from the shopping cart and calculates the total
  */
  remove(productName: string)
  {
    this.shoppingCarts.splice(this.shoppingCarts.findIndex(p => p.name == productName), 1);
    this.setTotal();
  }  

  /* 
    loads the shopping cart from local storage, if it has not been saved, creates a new instance
  */
  loadCart()
  { 
    const shoppingCardStorage = this.localStorageService.get();
    if (shoppingCardStorage){
      this.shoppingCarts = shoppingCardStorage;
    } else {
      this.shoppingCarts = new Array<any>();
    }
  }

  /*
    adds a new product and calculates the total
  */
  addProduct(product: any) {
    const item =  this.shoppingCarts.find(p => p.name == product.name);
        
    if (item) {
      item.quantity ++;
    } else {
      this.shoppingCarts.push({...product, quantity: 1});
    }
    this.setTotal();
  }

  /*
    calculates the total and save shopping cart array to local storage   
  */
  public setTotal() {
    this.total = this.shoppingCarts.reduce((sum, current) => sum + (current.price * current.quantity), 0);
    this.total = parseFloat(this.total.toFixed(2));

    this.save();
  }

  /*
    saves shopping cart to local storage 
  */
  save()
  {
    this.localStorageService.add(this.shoppingCarts);
  }

}

