import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './component/input/input.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { InputDateComponent } from './component/input-date/input-date.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    InputComponent,
    InputDateComponent
  ],
  exports: [
    InputComponent,
    InputDateComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class SharedModule { }
