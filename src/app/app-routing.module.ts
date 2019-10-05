import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './modules/register-module/register-module.module#RegisterModuleModule' },
  { path: 'users', loadChildren: './modules/user-module/user-module.module#UserModuleModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
