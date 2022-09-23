import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containerComponent } from './container/container.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: containerComponent
  }
]

@NgModule({
  declarations: [
    containerComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FindCarFormModule { }
