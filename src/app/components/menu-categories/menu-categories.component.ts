import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent  implements OnInit{
  categories: Category[] = [];

  constructor(private productService : ProductService){
  }

  ngOnInit(){
    this.listProductCategories();
  }

  listProductCategories(){
    this.productService.getCategoryList().subscribe(
      data => {
        console.log('Categories=' + JSON.stringify(data));
        this.categories = data;
      }
    );
  }
}
