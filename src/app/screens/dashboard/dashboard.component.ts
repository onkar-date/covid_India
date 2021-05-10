import { SidebarMenuItem } from './../../shared/constants/sidebar-menu.constant';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  sidebarMenuItems = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.sidebarMenuItems = SidebarMenuItem;
    const route = this.router.url.split('/').pop();
    this.setActiveMenu(route);
  }

  ngOnInit(): void {
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
