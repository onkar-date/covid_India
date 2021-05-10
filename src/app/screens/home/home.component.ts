import { IDailyCases } from './../../shared/interfaces/dailyCases';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { tableHelper } from 'src/app/shared/helpers/table.helper';
import { covidMapper } from 'src/app/shared/mappers/covidData.mapper';
import { CovidService } from './../../shared/services/corona-data.service';
import { ICovidData, ITotal } from './../../shared/interfaces/covidData';
import { sortData } from './../../shared/helpers/sort.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  page = 1;
  pageSize = 10;
  modalRef: NgbModalRef;
  modalOptions: NgbModalOptions;
  tableHeaders = [];
  tableRows = [];
  pieChartData: ITotal = null;
  covidData: ICovidData = null;
  sortDirection = [];
  stateNames: string[] = [];
  dailyCases: IDailyCases;
  monthWiseCases: number[] = [];
  searchKey = '';
  constructor(
    private covidService: CovidService
  ) {
    this.modalOptions = {
      size: 'xl',
      scrollable: true
    };
    this.tableHeaders = tableHelper.getTableHeaders(true);
    this.tableHeaders.forEach(_ => this.sortDirection.push('asc'));
  }

  async ngOnInit() {
    const stateWiseData = await this.covidService.getStateWiseData();
    const districtWiseData = await this.covidService.getStateDistrictWiseData();
    this.dailyCases = await this.getDailyCases();
    this.covidData = covidMapper.mapData(stateWiseData, districtWiseData);
    this.monthWiseCases = covidMapper.mapDailyCases(this.dailyCases);
    this.initiate();
  }

  initiate(): void {
    this.tableRows = this.covidData.states;
    this.pieChartData = this.covidData.totals;
  }

  async getDailyCases(): Promise<IDailyCases> {
    const res = await this.covidService.getDailyCasesIndia();
    return res;
  }

  sort(sortBy, order, i): void {
    sortData(this.tableRows, sortBy, order);
    this.sortDirection[i] = order === 'asc' ? 'desc' : 'asc';
  }
}
