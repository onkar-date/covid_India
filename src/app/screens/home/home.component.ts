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
  state: string = null;
  district: string = null;
  tableHeaders = [];
  tableRows = [];
  pieChartData: ITotal = null;
  covidData: ICovidData = null;
  sortDirection = [];
  stateNames: string[] = [];
  searchKey = '';
  constructor(
    private covidService: CovidService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.modalOptions = {
      size: 'xl',
      scrollable: true
    };
    this.state = this.activatedRoute.snapshot.params.state;
    this.district = this.activatedRoute.snapshot.params.district;
    this.tableHeaders = tableHelper.getTableHeaders(this.state ? false : true);
    this.tableHeaders.forEach(_ => this.sortDirection.push('asc'));
  }

  async ngOnInit() {
    const stateWiseData = await this.covidService.getStateWiseData();
    const districtWiseData = await this.covidService.getStateDistrictWiseData();
    this.covidData = covidMapper.mapData(stateWiseData, districtWiseData);
    await this.initiate();
  }

  initiate(): void {
    this.tableRows = this.getTableRows();
    if (!this.tableRows.length) {
      this.router.navigate([`../../404`], { relativeTo: this.activatedRoute });
      return;
    }
    this.pieChartData = this.getPieChartData();
    this.scrollToView();
  }

  getTableRows(): Array<any> {
    if (this.state) {
      const selectedState = this.covidData.states.find(state => state.name === this.state);
      return selectedState ? selectedState.districts : [];
    } else {
      return this.covidData.states;
    }
  }

  getPieChartData(): ITotal {
    if (this.state) {
      const selectedState = this.covidData.states.find(state => state.name === this.state);
      return selectedState.totals;
    } else {
      return this.covidData.totals;
    }
  }

  showStateData(selectedState): void {
    if (this.district) {
      this.router.navigate([`../../${selectedState}`], { relativeTo: this.activatedRoute});
    } else if (this.state) {
      this.router.navigate([`../${selectedState}`], { relativeTo: this.activatedRoute});
    } else {
      this.router.navigate([`./${selectedState}`], { relativeTo: this.activatedRoute});
    }
    this.state = selectedState;
    this.initiate();
    this.searchKey = '';
    this.scrollToView();
    return;
  }

  showDistrictData(district): void {
    let url = '';
    if (this.district) {
      url = `../${district.name}`;
    } else {
      url = `./${district.name}`;
    }
    this.district = district.name;
    this.router.navigate([url], {
      relativeTo: this.activatedRoute
    });
    this.scrollToView();
  }

  sort(sortBy, order, i): void {
    sortData(this.tableRows, sortBy, order);
    this.sortDirection[i] = order === 'asc' ? 'desc' : 'asc';
  }

  scrollToView(): void {
    const el: HTMLElement = document.getElementById('mainView');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
  }

}
