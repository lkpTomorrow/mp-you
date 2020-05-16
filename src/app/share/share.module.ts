import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

const SHARE_COMPONENT=[
  DefaultLayoutComponent
]
@NgModule({
  declarations: [
    ...SHARE_COMPONENT
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgZorroAntdModule,
    ...SHARE_COMPONENT
  ]
})
export class ShareModule { }
