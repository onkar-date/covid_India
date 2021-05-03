import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../library/pipes/pipes.module';
import { SharedComponentsModule } from '../library/shared-components/shared-components.module';
import { DistrictDataModalComponent } from './district-data-modal/district-data-modal.component';
import { FormsModule } from '@angular/forms';
import { DataSourceComponent } from './data-source/data-source.component';


@NgModule({
  declarations: [HomeComponent, DistrictDataModalComponent, DataSourceComponent],
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
