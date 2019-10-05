import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    NgxDatatableModule,
  ]
})
export class UserModuleModule { }
