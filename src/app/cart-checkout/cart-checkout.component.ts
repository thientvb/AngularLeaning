import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html'
})
export class CartCheckoutComponent implements OnInit {
  @Input() promoCode: string;
  @Input() subtotal: number;
  @Input() tax: number;
  @Input() total: number;
  @Input() discount: number;
  pressPromoCode() {
    if (this.promoCode.toLocaleLowerCase() === 'muathu') {
      alert('Giam 50%');
    }
    console.log(this.promoCode);
  }
  constructor() { }

  ngOnInit() {
  }

}
