import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

@NgModule({
  declarations: [PlaceholderComponent, PieChartComponent, PageNotFoundComponent, FooterComponent, LineChartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  exports: [
    PlaceholderComponent,
    PieChartComponent,
    FooterComponent,
    LineChartComponent
  ]
})
export class SharedComponentsModule { }
