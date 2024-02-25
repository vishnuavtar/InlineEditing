import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CasCadeDropComponent } from './cas-cade-drop/cas-cade-drop.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';
import { SubmitButtonActiveComponent } from './submit-button-active/submit-button-active.component';
import { EditAndSubmitEnableDisableComponent } from './edit-and-submit-enable-disable/edit-and-submit-enable-disable.component';


@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    CasCadeDropComponent,
    InlineEditComponent,
    SubmitButtonActiveComponent,
    EditAndSubmitEnableDisableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     BrowserAnimationsModule,
     MatPaginatorModule,NgxPaginationModule,
     ReactiveFormsModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
