import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './product.service';
import {ProductListComponent} from './product-list/product-list.component';
import {OrderComponent} from './order/order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
    ]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
