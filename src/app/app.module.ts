import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './share/services/product.service';
import { LocalStorageService } from './share/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent, ProductListComponent         

  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
