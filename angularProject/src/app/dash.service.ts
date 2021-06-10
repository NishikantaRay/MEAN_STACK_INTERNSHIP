import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private _http:HttpClient) { }

  listcontactbyuser(){
    return this._http.get<{message:string,contactData:any}>(environment.baseUrlcontact+'/'+localStorage.getItem('userID'));
  }
}
