import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  pid!:number;
  //products:Product[]=[];

  products:Product = new Product();

 constructor(private route:ActivatedRoute,
  private productService:ProductService
  ){}

  ngOnInit(): void {

    this.pid = this.route.snapshot.params['pid'];
    this.productService.getById(this.pid).subscribe(data=>{
      this.products = data;
    })
  }

  
}
