import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { tableHelper } from 'src/app/shared/helpers/table.helper';
import { covidMapper } from 'src/app/shared/mappers/covidData.mapper';
import { CovidService } from './../../shared/services/corona-data.service';
import { ICovidData, ITotal } from './../../shared/interfaces/covidData';
import { DistrictDataModalComponent } from './../district-data-modal/district-data-modal.component';
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
  state = null;
  tableHeaders = [];
  tableRows = [];
  pieChartData: ITotal = null;
  covidData: ICovidData = null;
  sortDirection = [];
  stateNames: string[] = [];
  searchKey = '';
  constructor(
    private covidService: CovidService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.modalOptions = {
      size: 'xl',
      scrollable: true
    };
    this.state = this.activatedRoute.snapshot.params.state;
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
    if (this.state) {
      this.router.navigate([`../${selectedState}`], { relativeTo: this.activatedRoute});
    } else {
      this.router.navigate([`./${selectedState}`], { relativeTo: this.activatedRoute});
    }
    this.state = selectedState;
    this.initiate();
    this.searchKey = '';
    return;
  }

  showDistrictData(district): void {
    this.modalRef = this.modalService.open(DistrictDataModalComponent);
    this.modalRef.componentInstance.totals = district.totals;
    this.modalRef.componentInstance.name = district.name;
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