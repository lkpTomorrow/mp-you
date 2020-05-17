import { DefaultLayoutComponent } from './share/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'pages/home',pathMatch:'full'},
  {
    path:'pages',component:DefaultLayoutComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'product',loadChildren:'./product/product.module#ProductModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
