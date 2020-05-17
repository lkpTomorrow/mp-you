import { HomeService } from './home.service';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ShareModule } from "../share/share.module";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

const SHARE_COMPONENTS = [HomeComponent];
@NgModule({
  declarations: [...SHARE_COMPONENTS, ProductListComponent, ProductListItemComponent],
  imports: [ShareModule],
  providers: [HomeService],
  exports: [...SHARE_COMPONENTS]
})
export class HomeModule {}
