import { DashboardComponent } from './dashboard/dashboard.component';
import { VaccinationHomeComponent } from './vaccination-home/vaccination-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../library/shared-components/page-not-found/page-not-found.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'india',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'vaccination',
    component: VaccinationHomeComponent
  },
  {
    path: 'india',
    component: HomeComponent
  },
  {
    path: 'india/404',
    redirectTo: '404',
    pathMatch: 'full'
  },
  {
    path: 'india/:state',
    component: HomeComponent
  },
  {
    path: 'india/:state/:district',
    component: HomeComponent
  },
  {
    path: 'sources',
    component: DataSourceComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'india',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
