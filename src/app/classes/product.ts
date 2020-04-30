import {Producer} from './producer';
import {Category} from './category';

export class Product {
  id = 0;
  productCode: number;
  productName: string;
  productProducer: Producer;
  productCategory: Category;
  productNumber = 0;
  productPrice: number;
}
