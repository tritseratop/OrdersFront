import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../classes/product';
import {Client} from '../classes/client';
import {Category} from '../classes/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  category: Category;
  categories: Category[] = [];
  products: Product[] = [];
  product: Product;
  @Input() chosenProductId;

  constructor(private productService: ProductService) {
    this.category = new Category();
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
    this.productService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  setCategory(category: Category) {
    this.category = category;
  }

  setProduct(product: Product) {
    this.product = product;
    this.chosenProductId = product.id;
  }

  getProductsByCategory(category: Category) {
    this.productService.getProductsByCategory(category).subscribe(data => {
      this.products = data;
    });
  }

}
