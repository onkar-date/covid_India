import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WrapperService {

  constructor(private httpClient: HttpClient) { }

  public async Api(method: string, url: string, covinAPi?: boolean, params?: any, data?: any): Promise<any> {
    let httpOptions = null;
    if (covinAPi) {
      httpOptions = new HttpHeaders({
        'Accept-Language': 'hi_IN'
      });
    }
    if (params) {
      return await this.httpClient.request(method, url, { body: data, params}).toPromise();
    } else {
      return await this.httpClient.request(method, url, { body: data}).toPromise();
    }
  }
}
