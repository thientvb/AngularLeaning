import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_1280.jpg',
      description: 'may tinh 1',
      price: 1000,
      quantity: 5
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/home-office-336373_1280.jpg',
      description: 'may tinh 2',
      price: 10000000,
      quantity: 3
    }
  ];
  promoCode: string;
  subtotal: number = 20;
  tax: number = 10;
  total: number = 30;
  discount: number = 5;
  pressPromoCode() {
    if (this.promoCode.toLocaleLowerCase() === 'muathu') {
      alert('Giam 50%');
    }
    console.log(this.promoCode);
  }
}
