import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html'
})
export class CartBodyComponent implements OnInit {
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
  removeProduct(id: number) {
    const indexId = this.products.findIndex(product => product.id === id);
    if (indexId !== -1) {
      this.products.splice(indexId, 1);
    }
    alert('Đã xoá ' + id);
  }
  constructor() { }

  ngOnInit() {
  }

}
