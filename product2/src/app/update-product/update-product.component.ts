import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  // product: Product = new Product();
  // pid!: number;

  // constructor(private http: ProductService,
  //   private route: ActivatedRoute
  // ) { }

  // ngOnInit(): void {

  //   const id = this.route.snapshot.paramMap.get('pid');
  //   this.http.getById(this.pid).subscribe(data => {
  //     this.product = data
  //   }, error => console.log(error)
  //   );


  // }

  // saveProduct() { }

  pid!: number;
  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam) {
            this.pid = +idParam;
            this.loadProduct();
        } else {
            console.error('No ID parameter found.');
        }
  }

  loadProduct() {
      this.productService.getProduct(this.pid).subscribe(product => {
          this.product = product;
      });
  }

  updateProduct() {
      this.productService.updateProduct(this.pid, this.product).subscribe(updatedProduct => {
          console.log('Product updated successfully:', updatedProduct);
      });
  }


  
}
