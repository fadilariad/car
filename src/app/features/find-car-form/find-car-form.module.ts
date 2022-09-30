import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule, Routes } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { SharedModule } from "../../shared/shared.module";
import { UserDetailsComponent } from './forms/user-details/user-details.component';
import { CarDetailsComponent } from './forms/car-details/car-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  }
]

@NgModule({
  declarations: [
    ContainerComponent,
    UserDetailsComponent,
    CarDetailsComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatStepperModule,
        MatButtonModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatRadioModule,
        SharedModule,

    ]
})
export class FindCarFormModule { }
