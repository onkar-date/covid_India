import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styles: [
  ]
})
export class PlaceholderComponent implements OnInit {

  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
  }

}
