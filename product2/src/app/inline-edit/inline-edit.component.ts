import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements OnInit {
  product!: Product;

  oldUserObj: any;
  id!: number;

  constructor(private productService: ProductService) { }





  products: any[] = [];

  ngOnInit(): void {
    this.getAllProduct();

  }

  // // Sample data
  // tableData = [
  //   { id: 1, name: 'John', age: 30 },
  //   { id: 2, name: 'Alice', age: 25 },
  //   { id: 3, name: 'Bob', age: 35 }
  // ];

  // editRow: any = {};

  // // Function to start editing a row
  // edit(row: any) {
  //   this.editRow[row.id] = { ...row };
  // }

  // // Function to save edited row
  // save(row: any) {
  //   delete this.editRow[row.id];
  // }

  // // Function to cancel editing
  // cancel(row: any) {
  //   this.editRow[row.id] = null;
  // }


  onEdit(product: any) {
    this.oldUserObj = JSON.stringify(product);
    this.products.forEach(element => {
      element.isEdit = false
    });
    product.isEdit = true;
  }

  onAdd() {
    const obj = {
      "pid": 1,
      "productName": "",
      "productPrice": "",
      "isEdit": true
    };

    this.products.unshift(obj);
  }

  onUpdate() {
    // this.productService.updateProduct(this.product).subscribe(response => {
    //   console.log("added successfully", response);
    // },
    //   error => {
    //     console.log("error", error);

    //   }
    // )

  }

  onCancel(obj: any) {
    const oldObj = JSON.parse(this.oldUserObj);
    obj.productName = oldObj.productName;
    obj.productPrice = oldObj.productPrice;
    obj.isEdit = false;
  }

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.getAllProduct();
    })
  }

  getAllProduct() {
    this.productService.printProduct().subscribe(data => {
      this.products = data;
    })
  }

}
