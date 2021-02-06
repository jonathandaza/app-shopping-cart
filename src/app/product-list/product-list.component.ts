import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../share/services/product.service';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products: Array<any> = new Array<any>();

  @Output()
  selectedProduct = new EventEmitter<any>();
  
  constructor(
    productService: ProductService
  ) {
      this.products = productService.getAll();
   } 

  ngOnInit(): void {
  }
  
 /**
  * adds a new product to shopping cart 
  * @param product: @product object  to emit forward the parent
  */
  add(product: any)
  {
    this.selectedProduct.emit(product);
  }

}
