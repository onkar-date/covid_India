import { IDailyCases } from './../../shared/interfaces/dailyCases';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { tableHelper } from 'src/app/shared/helpers/table.helper';
import { CovidService } from './../../shared/services/corona-data.service';
import { ITotal, ICovidData } from './../../shared/interfaces/covidData';
import { CovidData } from 'src/app/shared/classes/CovidData';
import { Subscription } from 'rxjs';
import { ClientStoreService } from 'src/app/shared/services/client-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  modalRef: NgbModalRef;
  modalOptions: NgbModalOptions;
  tableHeaders = [];
  tableRows = [];
  pieChartData: ITotal = null;
  covidData: ICovidData;
  dailyCases: IDailyCases;
  monthWiseCases: any;
  covidDataSub: Subscription;
  constructor(
    private covidService: CovidService,
    private clientStore: ClientStoreService
  ) {
    this.modalOptions = {
      size: 'xl',
      scrollable: true
    };
    this.tableHeaders = tableHelper.getTableHeaders(true);
  }

  ngOnDestroy(): void {
    this.covidDataSub?.unsubscribe();
  }

  async ngOnInit() {
    await this.getData();
    this.initiate();
  }

  async getData(): Promise<void> {
    await this.getDataFromCache();
  }

  async getDataFromCache() {
    const data = await this.clientStore.getItem('covidData');
    if (data) {
      this.covidData = data.covidData;
      this.dailyCases = data.dailyCasesData;
      this.monthWiseCases = data.monthwiseCases;
    }
  }

  initiate(): void {
    this.tableRows = this.covidData.states;
    this.pieChartData = this.covidData.totals;
  }
}
