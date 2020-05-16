import { DefaultLayoutComponent } from './share/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'pages',pathMatch:'full'},
  {
    path:'pages',component:DefaultLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
