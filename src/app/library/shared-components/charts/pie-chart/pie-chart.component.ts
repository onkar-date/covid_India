import { Component, Input, OnInit } from '@angular/core';
import { ChartColor, ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { chartMapper } from '../../../../shared/mappers/chart.mapper';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [
  ]
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left'
    }
  };
  @Input() totals;
  pieChartLabels: Label[];
  pieChartData: SingleDataSet;
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartColors = [
    // {
    //   backgroundColor: ['#007bff ', '#28a745', '#dc3545']
    // },
  ];
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.pieChartData = chartMapper.getPieChartData(this.totals);
    this.pieChartLabels = chartMapper.getPieChartLabel();
  }

}
