import { Component, OnInit } from '@angular/core';
import { DataSources } from 'src/app/shared/constants/data-source.constant';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styles: [
  ]
})
export class DataSourceComponent implements OnInit {

  sources = DataSources;
  constructor() { }

  ngOnInit(): void {
  }
}
