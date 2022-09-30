import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './component/input/input.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { InputDateComponent } from './component/input-date/input-date.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";
import { ColorPickerComponent } from "@shared/component/color-picker/color-picker.component";
import { ColorPickerModule } from "ngx-color-picker";
import { AlertComponent } from "@shared/alert/alert-component/alert.component";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    InputComponent,
    InputDateComponent,
    ColorPickerComponent,
    AlertComponent
  ],
  exports: [
    InputComponent,
    InputDateComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    ColorPickerModule,
    MatIconModule,
  ]
})
export class SharedModule { }
