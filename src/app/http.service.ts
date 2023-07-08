import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { environment } from 'src/environments/environment';
interface IResponse {
  isError?: boolean;
  message?: string;
  data: any;
}
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private httpOptions = {};
  token:any=localStorage.getItem('token');
  private domain = environment.baseUrl;
  constructor(private http: HttpClient) {}
  //////////////////////////////////////////
  getGovernments(): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.get<IResponse>(environment.baseUrl.concat(`government`),{ headers });
  }
  //////////////////////////////////////////
  getRegions(regId:number): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.get<IResponse>(environment.baseUrl.concat(`region/${regId}`),{ headers });
  }
   //////////////////////////////////////////
   getCategoryElements(catId:any): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.get<IResponse>(environment.baseUrl.concat(`product/${catId}`),{ headers });
  }
  //////////////////////////////////////////
   getElementsForGovern(catId:any,governId:any): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.get<IResponse>(environment.baseUrl.concat(`filter/${catId}/${governId}`),{ headers });
  }
   //////////////////////////////////////////
   getElementsForRegion(catId:any,governId:any,regId:any): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.get<IResponse>(environment.baseUrl.concat(`filter/${catId}/${governId}/${regId}`),{ headers });
  }
  //////////////////////////////////////////
  getSelectedElement(prodId:any): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.get<IResponse>(environment.baseUrl.concat(`product/prod/${prodId}`),{ headers });
  }
   //////////////////////////////////////////
   getCategories(): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.get<IResponse>(environment.baseUrl.concat(`category`),{ headers });
  }
  //////////////////////////////////////////
  bookTable(body:any): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.post<IResponse>(environment.baseUrl.concat(`reserve/table`),body,{ headers });
  }
  //////////////////////////
  bookRoom(body:any): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.post<IResponse>(environment.baseUrl.concat(`reserve/room`),body,{ headers });
  }
  ////////////////////////////////////////
  bookMedical(body:any): Observable<IResponse> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
    return this.http.post<IResponse>(environment.baseUrl.concat(`reserve/operation`),body,{ headers });
  }
}

