import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  product:Product = new Product();

  constructor(private productService:ProductService){}
 
  ngOnInit(): void {
  }


  saveProduct(){
    this.productService.saveProduct(this.product).subscribe(response=>{
      console.log("added successfully", response);
    },
    error=>{
      console.log("error",error);
      
    }
    )
  }




}
