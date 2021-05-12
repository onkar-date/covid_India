import { ITotal } from './../../../shared/interfaces/covidData';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-card',
  templateUrl: './pie-chart-card.component.html',
  styles: [
  ]
})
export class PieChartCardComponent implements OnInit {

  @Input() totals: ITotal;
  @Input() cardHeader = 'Summary';
  constructor() { }

  ngOnInit(): void {
  }

}
