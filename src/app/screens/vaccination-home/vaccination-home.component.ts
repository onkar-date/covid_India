import { CovinService } from './../../shared/services/covin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccination-home',
  templateUrl: './vaccination-home.component.html',
  styles: [
  ]
})
export class VaccinationHomeComponent implements OnInit {
  states = [];
  districts = [];
  date: Date;
  pincode = null;
  districtId = null;
  sessions = [];
  constructor(
    private covinService: CovinService
  ) { }

  async ngOnInit() {
    this.states = await this.getStates();
  }

  async getStates(): Promise<Array<any>> {
    const res = await this.covinService.getStates();
    return res.states;
  }

  async getDistricts(stateId): Promise<void> {
    const res = await this.covinService.getDistricts(stateId);
    this.districts = res.districts;
  }

  formatDate(date): void {
    console.log(date);
    const arr = date.split('-');
    this.date = arr.reverse().join('-');

  }

  async findSessions(findByPin = true) {
    this.sessions = [];
    if (findByPin) {
      const res = await this.covinService.getVaccinationSessionByPin(this.pincode, this.date);
      this.sessions = res.sessions;
      console.log(this.sessions);
    } else {
      const res = await this.covinService.getVaccinationSessionByDistrict(this.pincode, this.date);
      this.sessions = res.sessions;
      console.log(this.sessions);
    }
  }

}
