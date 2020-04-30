import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './classes/product';
import {Example} from './example';
import {Observable} from 'rxjs';
import {Category} from './classes/category';
import {Orders} from './classes/orders';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product;
  private readonly ordersUrl: string;

  constructor(private http: HttpClient) {
    this.ordersUrl = 'http://localhost:8080/OrdersBack-1.0-SNAPSHOT/';
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ordersUrl);
  }

  public getProductsByCategory(category: Category): Observable<Product[]> {
    return this.http.post<Product[]>(this.ordersUrl, category);
  }

  getAllCategories(): Observable<Category[]> {
    const url = `${this.ordersUrl}category`;
    return this.http.get<Category[]>(url);
  }

  public getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.ordersUrl}${id}`, { observe: 'body', responseType: 'json'});
  }

  public saveOrder(order: Orders) {
    this.http.put(`${this.ordersUrl}client`, order.orderClient);
    console.log("REST");
    return this.http.put(`${this.ordersUrl}order`, order);
  }

  public putExample(example: Example) {
    return this.http.put('http://localhost:8080/OrdersBack-1.0-SNAPSHOT/order/putexample', example);
  }
}
