import { Injectable } from '@angular/core';
import { WrapperService } from './wrapper.service';
import { environment } from './../../../environments/environment';
import { endpoints } from './../constants/urlConstant';
import { ApiMethod } from './../constants/api';
import { urlHelper } from '../helpers/url.helper';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  constructor(
    private wrapperService: WrapperService
  ) { }

  async getStateWiseData(): Promise<any> {
    const stateDistrictDataUrl = urlHelper.createUrl([
      environment.variables.baseUrl,
      endpoints.stateWise
    ]);
    return await this.wrapperService.Api(ApiMethod.GET, stateDistrictDataUrl);
  }

  async getStateDistrictWiseData(): Promise<any> {
    const stateDistrictDataUrl = urlHelper.createUrl([
      environment.variables.baseUrl,
      endpoints.stateDistrictWise
    ]);
    return await this.wrapperService.Api(ApiMethod.GET, stateDistrictDataUrl);
  }
}
