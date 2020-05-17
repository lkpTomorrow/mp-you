import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:HomeComponent}
];
/**
 * 没哟用到这个路由，请自己实现吧
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class HomeRoutingModule{

}
