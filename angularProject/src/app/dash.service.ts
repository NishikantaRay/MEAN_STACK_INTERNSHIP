import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashService {
  public authtoken=localStorage.getItem('token')??'null';
  constructor(private _http:HttpClient) { }

  listcontactbyuser(){
    return this._http.get<{message:string,contactData:any}>(environment.baseUrlcontact+'/'+localStorage.getItem('userID'),{
      headers:new HttpHeaders().set('x-auth-token',this.authtoken)
    })
  }
}
