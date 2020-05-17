import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductCenterComponent } from './product-center/product-center.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductCenterComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
