import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataSourceComponent } from './data-source/data-source.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'india',
    pathMatch: 'full'
  },
  {
    path: 'india',
    component: HomeComponent
  },
  {
    path: 'india/:state',
    component: HomeComponent
  },
  {
    path: 'sources',
    component: DataSourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
