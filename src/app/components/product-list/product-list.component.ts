import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

//usa os dados do backend trazidos pelo productService e transforma nos dados usados em html
export class ProductListComponent implements OnInit{


  products: Product[] = [];
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;

      }
    )
  }
}
