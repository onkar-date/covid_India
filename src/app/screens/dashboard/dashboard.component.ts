import { CovidData } from './../../shared/classes/CovidData';
import { CovidService } from 'src/app/shared/services/corona-data.service';
import { SidebarMenuItem } from './../../shared/constants/sidebar-menu.constant';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICovidData } from 'src/app/shared/interfaces/covidData';
import { IDailyCases } from 'src/app/shared/interfaces/dailyCases';
import { ClientStoreService } from 'src/app/shared/services/client-store.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  covidDataObj: CovidData;
  sidebarMenuItems = [];
  covidData: ICovidData = null;
  dailyCases: IDailyCases;
  monthWiseCases: number[] = [];
  constructor(
    private covidService: CovidService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientStore: ClientStoreService
  ) {
    this.sidebarMenuItems = SidebarMenuItem;
    const route = this.router.url.split('/').pop();
    this.setActiveMenu(route);
  }

  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  async getData(): Promise<void> {
    this.activatedRoute.data.subscribe((data) => {
      if (data.covidData.covidData) {
        this.covidDataObj = data.covidData;
        this.covidData = data.covidData.covidData;
        this.dailyCases = data.covidData.dailyCases;
        this.monthWiseCases = data.covidData.monthwiseCases;
      }
    });
  }

  toggleMenu(): void {
    const toggle = document.querySelector('.toggle');
    toggle.classList.toggle('active');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.toggle('active');
  }

  routeToPage(item): void {
    this.setActiveMenu(item.name);
    this.router.navigate([`./${item.url}`], { relativeTo: this.activatedRoute });
    return;
  }

  setActiveMenu(item): void {
    this.sidebarMenuItems.forEach(_ => {
      _.active = _.name.toLowerCase() === item.toLowerCase() ? true : false;
    });
  }

}
