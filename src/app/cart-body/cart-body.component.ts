import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-cart-body',
  templateUrl: './cart-body.component.html'
})
export class CartBodyComponent implements OnInit {
  @Input() products: Product[];

  removeProduct(productSP: Product) {
    const r = confirm('Xác Nhận Xóa? Tên SP: ' + productSP.name);
    if (r === true) {
      const indexSanPham = this.products.findIndex(product => product.id === productSP.id);
      if (indexSanPham !== -1) {
        this.products.splice(indexSanPham, 1);
        alert('Đã xóa tên ' + productSP.name + ' sản phẩm ' + productSP.id);
      }
    }
  }

  changeQuantity(valueInput: string){
    console.log(parseFloat(valueInput) + 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
