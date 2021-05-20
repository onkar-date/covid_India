import { CovidService } from 'src/app/shared/services/corona-data.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CovidData } from '../classes/CovidData';
import { ClientStoreService } from './client-store.service';
import { covidMapper } from '../mappers/covidData.mapper';
import { IDailyCases } from '../interfaces/dailyCases';
import { ICovidData } from '../interfaces/covidData';
import { Injectable } from '@angular/core';

@Injectable()
export class CovidDataResolver implements Resolve<CovidData> {
  dailyCases: IDailyCases;
  covidData: ICovidData;
  monthWiseCases: number[];
  constructor(
    private clientStore: ClientStoreService,
    private covidService: CovidService
  ) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CovidData> | Promise<CovidData> {
    return this.setData();
  }

  async setData(): Promise<CovidData> {
    const dataFromCache = await this.clientStore.getItem('covidData');
    if (dataFromCache?.covidData) {
      if (new Date().toISOString().split('T')[0] === dataFromCache.date) {
        return dataFromCache;
      }
    }
    const stateWiseData = await this.covidService.getStateWiseData();
    const districtWiseData = await this.covidService.getStateDistrictWiseData();
    this.dailyCases = await this.covidService.getDailyCasesIndia();
    this.covidData = covidMapper.mapData(stateWiseData, districtWiseData);
    this.monthWiseCases = covidMapper.mapDailyCases(this.dailyCases);
    const covidObj = new CovidData(this.covidData, this.dailyCases, this.monthWiseCases, new Date().toISOString().split('T')[0]);
    await this.clientStore.setItem('covidData', covidObj);
    return covidObj;
  }
}