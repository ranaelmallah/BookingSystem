import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _HttpClient:HttpClient ) { }
postContact(user:any){
  return this._HttpClient.post('https://gp.high-sora.com/api/contact/create',user)
}
postlogin(data:any){
  return this._HttpClient.post('https://gp.high-sora.com/api/login',data)
}
postsignUp(data:any){
  return this._HttpClient.post('https://gp.high-sora.com/api/register',data)
}
}
// Route::post('login/{id}', [AuthController::class, 'login']);
