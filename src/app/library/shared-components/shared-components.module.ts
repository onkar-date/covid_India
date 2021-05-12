import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './../pipes/pipes.module';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartCardComponent } from './pie-chart-card/pie-chart-card.component';
import { CasesTableComponent } from './cases-table/cases-table.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PlaceholderComponent,
    PieChartComponent,
    PageNotFoundComponent,
    FooterComponent,
    LineChartComponent,
    PieChartCardComponent,
    CasesTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule,
    PipesModule,
    FormsModule,
    NgbPaginationModule,
    ReactiveFormsModule
  ],
  exports: [
    PlaceholderComponent,
    FooterComponent,
    LineChartComponent,
    PieChartCardComponent,
    CasesTableComponent
  ]
})
export class SharedComponentsModule { }
