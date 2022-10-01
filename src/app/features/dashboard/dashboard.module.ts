import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { PlotlyModule } from "angular-plotly.js";
import * as PlotlyJS from 'plotly.js-dist-min';
import { MatTableModule } from "@angular/material/table";
import { ColorVsAgeComponent } from './charts/color-vs-age/color-vs-age.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { StatisticsComponent } from './charts/statistics/statistics.component';
import { TableComponent } from './charts/table/table.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  }
]

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [ContainerComponent, ColorVsAgeComponent, StatisticsComponent, TableComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    PlotlyModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule
  ]
})
export class DashboardModule {
}
