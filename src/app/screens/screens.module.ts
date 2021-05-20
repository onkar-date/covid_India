import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../library/pipes/pipes.module';
import { SharedComponentsModule } from '../library/shared-components/shared-components.module';
import { DataSourceComponent } from './data-source/data-source.component';
import { StatsSummaryComponent } from './stats-summary/stats-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DataSourceComponent,
    StatsSummaryComponent,
    DashboardComponent,
    VaccinationComponent,
    StateComponent,
    DistrictComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    PipesModule,
    SharedComponentsModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ScreensModule { }
