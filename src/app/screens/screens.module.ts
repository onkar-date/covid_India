import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../library/pipes/pipes.module';
import { SharedComponentsModule } from '../library/shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { DataSourceComponent } from './data-source/data-source.component';
import { StatsSummaryComponent } from './stats-summary/stats-summary.component';


@NgModule({
  declarations: [HomeComponent, DataSourceComponent, StatsSummaryComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule,
    PipesModule,
    SharedComponentsModule,
    NgbPaginationModule,
    FormsModule
  ],
})
export class ScreensModule { }
