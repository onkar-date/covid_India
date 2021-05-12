import { ICovidData, ITotal, IState } from './../../shared/interfaces/covidData';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientStoreService } from 'src/app/shared/services/client-store.service';
import { tableHelper } from 'src/app/shared/helpers/table.helper';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styles: [
  ]
})
export class StateComponent implements OnInit{

  covidData: ICovidData = null;
  selectedState: IState;
  stateTotals: ITotal = null;
  tableHeaders = [];
  tableRows = [];
  covidDataSub: Subscription;
  constructor(
    private clientStore: ClientStoreService
  ) {
    this.tableHeaders = tableHelper.getTableHeaders(true);
  }

  async ngOnInit() {
    await this.getDataFromCache();
    this.initiate();
  }

  async getDataFromCache() {
    const data = await this.clientStore.getItem('covidData');
    if (data) {
      this.covidData = data.covidData;
    }
  }

  initiate(): void {
    this.showStateSummary(this.covidData.states[0].name);
  }

  showStateSummary(stateName): void {
    this.selectedState = this.covidData.states.find(state => state.name === stateName);
    this.stateTotals = this.selectedState.totals;
    this.tableRows = this.selectedState.districts;
  }
}
