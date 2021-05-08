import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../library/pipes/pipes.module';
import { SharedComponentsModule } from '../library/shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { DataSourceComponent } from './data-source/data-source.component';
import { StatsSummaryComponent } from './stats-summary/stats-summary.component';
import { VaccinationHomeComponent } from './vaccination-home/vaccination-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [HomeComponent, DataSourceComponent, StatsSummaryComponent, VaccinationHomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    PipesModule,
    SharedComponentsModule,
    NgbPaginationModule,
    NgbNavModule,
    FormsModule
  ]
})
export class ScreensModule { }
