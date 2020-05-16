import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloaderSpinnerService} from './preloader-spinner.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PreloaderSpinnerService
  ]
})
export class CoreModule { }
