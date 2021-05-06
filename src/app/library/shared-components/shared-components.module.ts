import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [PlaceholderComponent, PieChartComponent, JumbotronComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  exports: [
    PlaceholderComponent,
    PieChartComponent,
    JumbotronComponent
  ]
})
export class SharedComponentsModule { }
