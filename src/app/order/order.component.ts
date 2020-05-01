import { Component, Input, NgModule, OnInit} from '@angular/core';
import {Client} from '../classes/client';
import {Product} from '../classes/product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Orders} from '../classes/orders';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Orders;
  client: Client;
  @Input() product: Product;
  @Input() chosenProductId;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.client = new Client();

    this.chosenProductId = 0;

    this.product = new Product();
    this.product.id = this.chosenProductId;

    this.order = new Orders();
    this.order.orderStatus = 0;
    this.order.orderProduct = new Product();
    this.order.orderProduct.id = this.chosenProductId;
  }

  saveOrder() {
    this.order.orderClient = this.client;
    this.order.orderProduct = this.product;
    this.order.orderPrice = this.product.productPrice * this.order.orderNumber;

    this.productService.saveOrder(this.order).subscribe(data => {this.order = data; });
  }

}
