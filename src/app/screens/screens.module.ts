import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../library/pipes/pipes.module';
import { SharedComponentsModule } from '../library/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataSourceComponent } from './data-source/data-source.component';
import { StatsSummaryComponent } from './stats-summary/stats-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VaccinationComponent } from './vaccination/vaccination.component';


@NgModule({
  declarations: [
    HomeComponent,
    DataSourceComponent,
    StatsSummaryComponent,
    DashboardComponent,
    VaccinationComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    PipesModule,
    SharedComponentsModule,
    NgbPaginationModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ScreensModule { }
