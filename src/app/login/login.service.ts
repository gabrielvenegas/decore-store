import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Public variables
  private _url = `${environment.url}/auth`;
  // Private variables
  constructor(private http: HttpClient) { }

  login(params) {
    return this.http.post(`${this._url}/admin-login`, params);
  }
}
