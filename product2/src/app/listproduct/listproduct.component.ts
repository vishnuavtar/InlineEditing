import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  products: Product[] = [];

  filters = {

    keywords:"" 
  }
  //products:Product = new Product();
  tableSize:number=10;
  currentPage = 1; // page
  pageSize = 10; 
  page:number=1;
  count:number=0;
  totalItems = 0;
  tableSizes:any=[5,10,15,20];

  startDate: string | undefined;
  endDate: string | undefined;
  productName: string=' ';
  productPrice!:string;
  pid!:number;
  searchQuery: string = '';

  
  constructor(private productService:ProductService,
              private router:Router,private http:HttpClient
    ){}
  
  product:Product[]=[];

  ngOnInit(): void {
    this.getEmployee();
   // this.loadProducts();
   this.postList();

  }


  postList():void{
    this.productService.printProduct().subscribe((response)=>{
      this.products = response;
      console.log(this.products);
      
    })
  }

  onTableDataChange(event:any){
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page=1;
    this.postList();
  }

  getEmployee(){
    this.productService.getAllProductsWithPagination(this.currentPage - 1, this.pageSize)
      .subscribe( data => {

        this.products = this.filterProduct(data.content)
        //this.products = data.content;
       // this.totalItems = data.totalElements;
    });
  }

  
  
  filterProduct(products:Product[]){
    return products.filter((e)=>{
     return  e.productName.toLowerCase().includes(this.filters.keywords.toLowerCase());
    })
  }


  updateProduct(pid:number){
    this.router.navigate(["productupdate",pid]);
  }

  deleteProduct(id:number){
      this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      
        this.getEmployee();
      })    
  }

  downloadProductList() {
    this.productService.downloadExcel().subscribe(response => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'product.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  downloadProductRange() {
    const url = `http://localhost:8080/api/download3?startDate=${this.startDate}&endDate=${this.endDate}`;
    this.http.get(url, { responseType: 'blob' }).subscribe((blob: Blob | MediaSource) => {
      const a = document.createElement('a');
      const objectUrl = window.URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'records.xlsx';
      a.click();
      window.URL.revokeObjectURL(objectUrl);
    });
  }

 loadProducts() {
    this.productService.getAllProductsWithPagination(this.currentPage - 1, this.pageSize)
      .subscribe(data => {
        this.products = data.content;
        this.totalItems = data.totalElements;
      });
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }

  details(pid:number){
    this.router.navigate(['details',pid]);
  }
  
  name!:string;

  

  // findByName(){
  //  return this.productService.findByName(this.name).subscribe(data=>{
  //   this.products=data;
    
  //  })
  // }


  
  //page: number = 0;
  size: number = 10;
  users: any[] = [];

  // findByName() {
  //   let params = new HttpParams()
  //     .set('name', this.name)
  //     .set('page', this.page.toString())
  //     .set('size', this.size.toString());

  //   this.http.get<any[]>('http://localhost:8080/api/by-name', { params }).subscribe(data => {
  //     this.products = data;
  //   });
  // }


  searchByName(name: string,page: number, size: number) {

    this.productService.searchByName(name,this.currentPage,this.pageSize).subscribe((data : any) => {
      this.products = data.content;
    })
  }

  findByName(productName:string){
    this.productService.findByName(productName).subscribe( data=>{
      this.products = data;
    })
  }

  
}
