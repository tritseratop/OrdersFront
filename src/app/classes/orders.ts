import {Client} from './client';
import {Product} from './product';

export class Orders {
  id: number;
  orderClient: Client;
  orderProduct: Product;
  orderNumber: number;
  orderPrice: number;
  orderStatus: number;
}
