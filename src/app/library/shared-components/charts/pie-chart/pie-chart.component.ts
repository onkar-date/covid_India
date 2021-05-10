import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartColor, ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
import { chartMapper } from '../../../../shared/mappers/chart.mapper';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [
  ]
})
export class PieChartComponent implements OnInit, OnChanges {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };
  @Input() totals;
  pieChartLabels: Label[];
  pieChartData: SingleDataSet;
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartColors = [
    {
      backgroundColor: ['#1ac2ed', '#b1e542', '#dc3545']
    },
  ];
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totals) {
      this.setPieChartData();
    }
  }

  ngOnInit(): void {
    this.pieChartData = chartMapper.getPieChartData(this.totals);
    this.pieChartLabels = chartMapper.getPieChartLabel();
  }

  setPieChartData(): void {
    this.pieChartData = chartMapper.getPieChartData(this.totals);
    this.pieChartLabels = chartMapper.getPieChartLabel();
  }

}
