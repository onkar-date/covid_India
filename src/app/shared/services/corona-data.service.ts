import { Injectable } from '@angular/core';
import { WrapperService } from './wrapper.service';
import { environment } from './../../../environments/environment';
import { endpoints, RootnetPrimary } from './../constants/urlConstant';
import { ApiMethod } from './../constants/api';
import { urlHelper } from '../helpers/url.helper';
import { IDailyCases } from '../interfaces/dailyCases';
import { Subject } from 'rxjs';
import { CovidData } from '../classes/CovidData';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  constructor(
    private wrapperService: WrapperService
  ) {}

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

  async getDailyCasesIndia(): Promise<IDailyCases> {
    const dailyCasesUrl = urlHelper.createUrl([
      environment.variables.baseUrlRootnet,
      RootnetPrimary.history
    ]);
    return await this.wrapperService.Api(ApiMethod.GET, dailyCasesUrl);
  }
}