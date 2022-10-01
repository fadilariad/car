import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { PlotlyModule } from "angular-plotly.js";
import * as PlotlyJS from 'plotly.js-dist-min';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    PlotlyModule
  ]
})
export class DashboardModule {
}
