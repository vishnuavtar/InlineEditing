import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

const routes: Routes = [

  {
    path:"",
    component:InlineEditComponent
  },

  {
    path: "updateProduct/:pid",
    component: UpdateProductComponent,
  },

  {
    path: "update",
    component: UpdateProductComponent,

  }
  ,
  {
    path: "add",
    component: AddProductComponent
  },
  {
    path:"list",
    component:ListproductComponent
  },
  {
    path:"details/:pid",
    component:ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
