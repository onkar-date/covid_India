import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WrapperService {

  constructor(private httpClient: HttpClient) { }

  public async Api(method: string, url: string, params?: any, data?: any, csvRes?: boolean): Promise<any> {
    let httpOptions = null;
    if (csvRes) {
      httpOptions = {
        headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
        responseType: 'text'
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({'Access-Control-Allow-Credentials': 'true'})
      }
    }
    if (params) {
      return await this.httpClient.request(method, url, { body: data, params, headers: httpOptions}).toPromise();
    } else {
      return await this.httpClient.request(method, url, { body: data, headers: httpOptions}).toPromise();
    }
  }
}
