import { Component, Input, OnInit } from '@angular/core';
import { sortData } from '../../../shared/helpers/sort.helper';
@Component({
  selector: 'app-cases-table',
  templateUrl: './cases-table.component.html',
  styles: [
  ]
})
export class CasesTableComponent implements OnInit {

  @Input() tableHeaders: Array<string> = [];
  @Input() tableRows: Array<any> = [];
  @Input() placeholder = 'search';
  page = 1;
  pageSize = 10;
  sortDirection = [];
  searchKey = '';
  constructor() {
    this.tableHeaders.forEach(_ => this.sortDirection.push('asc'));
  }

  ngOnInit(): void {
  }

  sort(sortBy, order, i): void {
    sortData(this.tableRows, sortBy, order);
    this.sortDirection[i] = order === 'asc' ? 'desc' : 'asc';
  }

}
