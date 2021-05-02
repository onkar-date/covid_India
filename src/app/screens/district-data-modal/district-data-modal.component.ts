import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-district-data-modal',
  templateUrl: './district-data-modal.component.html',
  styles: [
  ]
})
export class DistrictDataModalComponent implements OnInit {

  @Input() totals;
  @Input() name;
  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log(this.totals);
    
  }

}
