import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Client} from '../classes/client';
import {Product} from '../classes/product';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Orders} from '../classes/orders';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm;
  orderNumber = 1;
  order: Orders;
  client: Client;
  @Input() product: Product;
  @Input() chosenProductId;

  constructor(private productService: ProductService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      clientName: '',
      clientAddress: '',
      clientMobile: '',
      clientEmail: '',
      orderNumber: '',
    });
  }

  ngOnInit(): void {
    this.client = new Client();

    this.chosenProductId = 0;

    this.product = new Product();
    this.product.id = this.chosenProductId;
    this.product.productNumber = 1;

    this.order = new Orders();
    this.order.orderProduct = new Product();
    this.order.orderClient = new Client();
    this.order.orderProduct.id = this.chosenProductId;
  }

  onSubmit(orderData) {
    if (orderData.clientName === '' || orderData.clientEmail === '' ||
      orderData.clientMobile === '' || orderData.clientAddress === '') {
      alert('Заполните все поля!');
    } else {
      this.order.orderProduct = this.product;
      this.order.orderClient.clientName = orderData.clientName;
      this.order.orderClient.clientAddress = orderData.clientAddress;
      this.order.orderClient.clientMobile = orderData.clientMobile;
      this.order.orderClient.clientEmail = orderData.clientEmail;
      this.order.orderNumber = orderData.orderNumber;
      this.productService.saveOrder(this.order).subscribe(data => {
        this.order = data;
      });
    }
  }
}
