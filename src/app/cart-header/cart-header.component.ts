import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html'
})
export class CartHeaderComponent implements OnInit {
  @Input() numberItems: number;
  constructor() { }

  ngOnInit() {
  }
}
