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
    loadChildren: () => import('./features/landing-page/landing-page.module').then(
      (module) => module.LandingPageModule
    )
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
