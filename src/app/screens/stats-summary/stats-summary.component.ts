import { ITotal, ICovidData } from './../../shared/interfaces/covidData';
import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { LineChartdata } from 'src/app/shared/constants/lineChart.constant';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stats-summary',
  templateUrl: './stats-summary.component.html',
  styles: [
  ]
})
export class StatsSummaryComponent implements OnInit {

  @Input() countryData: ICovidData;
  @Input() monthWiseCases: Array<number>;
  lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: LineChartdata.header
    },
  ];
  lineChartLabels: Label[] = LineChartdata.labels;
  pieChartData: ITotal;
  constructor() {}

  ngOnInit(): void {
    this.pieChartData = this.countryData.totals;
    this.lineChartData[0].data = this.monthWiseCases;
  }

}
