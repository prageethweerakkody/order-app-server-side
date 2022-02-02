import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  public product: Product = new Product()

  constructor(private _productService: ProductsService, private _router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    console.log('printing product', this.product);
    this._productService.saveProduct(this.product).subscribe(product => {
      if (product){
        this._router.navigateByUrl('/products');
      }

    })

  }

}
