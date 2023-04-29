import { NgModule } from '@angular/core';
import { NgToastifyComponent } from './ng-toastify.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgToastifyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgToastifyComponent
  ]
})
export class NgToastifyModule { }
