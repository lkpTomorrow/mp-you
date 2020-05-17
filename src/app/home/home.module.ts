import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShareModule } from '../share/share.module';


const SHARE_COMPONENTS=[
  HomeComponent
]
@NgModule({
  declarations: [
    ...SHARE_COMPONENTS
  ],
  imports: [
    ShareModule
  ],
  exports:[
    ...SHARE_COMPONENTS
  ]
})
export class HomeModule { }
