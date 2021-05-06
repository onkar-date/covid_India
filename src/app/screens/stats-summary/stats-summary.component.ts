import { statsSummaryMapper } from './../../shared/mappers/stats-summary.mapper';
import { ITotal } from './../../shared/interfaces/covidData';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stats-summary',
  templateUrl: './stats-summary.component.html',
  styles: [
  ]
})
export class StatsSummaryComponent implements OnInit, OnChanges {

  @Input() countryData: Array<any>;
  @Input() state;
  @Input() district;
  pieChartData: ITotal;
  summarySections = null;
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setSummarySections();
  }

  ngOnInit(): void {
    this.setSummarySections();
  }

  setSummarySections(): void {
    this.summarySections = statsSummaryMapper.getSummarySections(this.countryData, this.state, this.district);
    this.setPiechartData();
  }

  showSummary(selectedSection): void {
    this.summarySections.forEach(section => {
      if (section.name === selectedSection.name) {
        section.active = true;
      } else {
        section.active = false;
      }
    });
    this.setPiechartData();
  }

  setPiechartData(): void {
    this.pieChartData = null;
    this.pieChartData = this.summarySections.find(section => section.active).totals;
  }

}
