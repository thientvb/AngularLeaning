import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html'
})
export class CartCheckoutComponent implements OnInit {
  subtotal: number = 20;
  tax: number = 10;
  total: number = 30;
  discount: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
