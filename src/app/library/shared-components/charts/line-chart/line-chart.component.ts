import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styles: [
  ]
})
export class LineChartComponent implements OnInit {
  @Input() lineChartData: ChartDataSets[];
@Input() lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions) = {
    // responsive: true
    maintainAspectRatio: false
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#1ac2ed6e',
    },
  ];
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
