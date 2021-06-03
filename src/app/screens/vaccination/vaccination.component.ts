import { Session, IVaccinationSession } from './../../shared/interfaces/session';
import { ToasterService } from './../../shared/services/toaster.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CovinService } from 'src/app/shared/services/covin-service.service';
import { ClientStoreService } from 'src/app/shared/services/client-store.service';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styles: [
  ]
})
export class VaccinationComponent implements OnInit, OnDestroy {
  page = 1;
  pageSize = 10;
  states = [];
  districts = [];
  sessions: Session[] = [];
  active = 1;
  sessionByPinForm: FormGroup;
  sessionByDistrictForm: FormGroup;
  formSubmitted = false;
  constructor(
    private covinService: CovinService,
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private clientStore: ClientStoreService
  ) {
    this.sessionByPinForm = this.formBuilder.group({
      pincode: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.sessionByDistrictForm = this.formBuilder.group({
      state: ['', Validators.required],
      district: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  async ngOnDestroy() {
    await this.removeFromCache();
  }

  async ngOnInit() {
    this.states = await this.getStates();
    this.sessions = await this.clientStore.getItem('slots');
    if (!this.sessions?.length) {
      this.sessions = [];
    } 
  }

  async getStates(): Promise<Array<any>> {
    const res = await this.covinService.getStates();
    return res.states;
  }

  async getDistricts(stateId): Promise<void> {
    const res = await this.covinService.getDistricts(stateId);
    this.districts = res.districts;
  }

  getFormatedDate(date): string {
    const arr = date.split('-');
    return arr.reverse().join('-');
  }

  async findSessionByPin() {
    await this.removeFromCache();
    this.sessions = [];
    if (this.sessionByPinForm.valid) {
      const pincode = this.sessionByPinForm.value.pincode;
      const date = this.getFormatedDate(this.sessionByPinForm.value.date);
      const res: IVaccinationSession = await this.covinService.getVaccinationSessionByPin(pincode, date);
      this.sessions = res.sessions;
      this.formSubmitted = true;
      await this.addToCache();
    } else {
      this.toasterService.error('Please select all required fields');
    }
  }

  async findSessionByDistrict() {
    this.sessions = [];
    if (this.sessionByDistrictForm.valid) {
      const districtId = this.sessionByDistrictForm.value.district;
      const date = this.getFormatedDate(this.sessionByDistrictForm.value.date);
      const res: IVaccinationSession = await this.covinService.getVaccinationSessionByDistrict(districtId, date);
      this.sessions = res.sessions;
      this.formSubmitted = true;
      await this.addToCache();
    } else {
      this.toasterService.error('Please select all required fields');
    }
  }

  bookSlot(): void {
    window.open('https://www.cowin.gov.in/home', '_blank');
    return;
  }

  async addToCache() {
    console.log('added');
    
    await this.clientStore.setItem('slots', this.sessions);
  }

  async removeFromCache() {
    await this.clientStore.removeItem('slots');
  }

}

