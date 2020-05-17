import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { NavComponent } from './nav/nav.component';
import { PricePipe } from './price.pipe';
import { MultilineEllipsisDirective } from './multiline-ellipsis.directive';

const SHARE_COMPONENT=[
  DefaultLayoutComponent
];

const SHARE_PIPE=[
  PricePipe
];

const SHARE_DIRECTIVE=[
  MultilineEllipsisDirective
]
@NgModule({
  declarations: [
    ...SHARE_COMPONENT,
    ...SHARE_PIPE,
    ...SHARE_DIRECTIVE,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    FooterInfoComponent,
    NavComponent,
    
    
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
    ...SHARE_COMPONENT,
    ...SHARE_PIPE,
    ...SHARE_DIRECTIVE,
  ]
})
export class ShareModule { }
