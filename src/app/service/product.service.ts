import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//traz os dados do backend
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }


}
interface GetResponse{
  _embedded: {
    products: Product[];
  }

}
