import { CovidDataResolver } from './../shared/services/covid-data-resolver';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { PageNotFoundComponent } from '../library/shared-components/page-not-found/page-not-found.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { covidData: CovidDataResolver},
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'vaccine',
        component: VaccinationComponent
      },
      {
        path: 'state',
        component: StateComponent
      },
      {
        path: 'district',
        component: DistrictComponent
      }
    ]
  },
  {
    path: 'sources',
    component: DataSourceComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
