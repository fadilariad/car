import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(
      (module) => module.DashboardModule
    )
  },
  {
    path: 'car',
    loadChildren: () => import('./features/find-car-form/find-car-form.module').then(
      (module) => module.FindCarFormModule
    )
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
