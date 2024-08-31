import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-products',
  templateUrl: './no-products.component.html',
  styleUrls: ['./no-products.component.css']
})
export class NoProductsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
