import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public authtoken=localStorage.getItem('token')??'null';

  constructor(private _http:HttpClient) { }
  addUserData(contacts:any){
    return this._http.post<{message:string,contact:any}>(environment.baseUrlcontact+'/add',contacts,{
      headers:new HttpHeaders().set('x-auth-token',this.authtoken)
    }  
  )}

 
}
