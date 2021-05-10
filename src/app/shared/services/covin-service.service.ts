import { CovinPrimary, CovinSecondary } from './../constants/urlConstant';
import { WrapperService } from './wrapper.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiMethod } from '../constants/api';
import { urlHelper } from '../helpers/url.helper';
import { HttpParams } from '@angular/common/http';
import { IVaccinationSession } from '../interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class CovinService {

  constructor(
    private wrapperService: WrapperService
  ) { }

  // get all states
  async getStates(): Promise<any> {
    const statesUrl = urlHelper.createUrl([
      environment.variables.baseUrlCovin,
      CovinPrimary.location,
      CovinSecondary.states
    ]);
    return await this.wrapperService.Api(ApiMethod.GET, statesUrl, true);
  }

  // get all the districts in state
  async getDistricts(stateId: string): Promise<any> {
    const districtsUrl = urlHelper.createUrl([
      environment.variables.baseUrlCovin,
      CovinPrimary.location,
      CovinSecondary.districts,
      stateId
    ]);
    return await this.wrapperService.Api(ApiMethod.GET, districtsUrl);
  }

  // API to get planned vaccination sessions on a specific date in a given pin.
  async getVaccinationSessionByPin(pincode, date): Promise<IVaccinationSession> {
    const sessionByPinUrl = urlHelper.createUrl([
      environment.variables.baseUrlCovin,
      CovinPrimary.appointmentSession,
      CovinSecondary.byPin
    ]);
    const params = new HttpParams()
      .set('pincode', pincode)
      .set('date', date);
    return await this.wrapperService.Api(ApiMethod.GET, sessionByPinUrl, params);
  }

  // API to get planned vaccination sessions on a specific date in a given district.
  async getVaccinationSessionByDistrict(districtId, date): Promise<IVaccinationSession> {
    const districtsUrl = urlHelper.createUrl([
      environment.variables.baseUrlCovin,
      CovinPrimary.appointmentSession,
      CovinSecondary.byDistrict
    ]);
    const params = new HttpParams()
      .set('district_id', districtId)
      .set('date', date);
    return await this.wrapperService.Api(ApiMethod.GET, districtsUrl, params);
  }
}
