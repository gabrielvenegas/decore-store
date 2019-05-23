import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable(
    { providedIn: 'root' }
)
export class PlanService {
    private _url = `${environment.url}/plan`;
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get(this._url);
    }

    create(plan): Observable<any> {
        return this.http.post(`${this._url}/create-plan`, plan);
    }
}