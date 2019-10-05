import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }



  public create(url: string, data: any) {
    return this.http.post(url, data).toPromise();
  }

  public get(url: string) {
    return this.http.get(url).toPromise();
  }

  public getAll(url: string, params?: any) {
    return this.http.get(url, { params: params }).toPromise();
  }

  public update(url: string, data: any) {
    return this.http.put(url, data).toPromise();
  }

  public delete(url: string) {
    return this.http.delete(url).toPromise();
  }
}
