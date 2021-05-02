import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styles: [
  ]
})
export class JumbotronComponent implements OnInit {

  @Input() covidData;
  @Output() showStateDataEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  showStateData(state): void {
    this.showStateDataEvent.emit(state);
  }

}
