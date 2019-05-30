import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    // Public variables
    private _url = `${environment.url}/utils`;
    // Private variables
    constructor(private http: HttpClient) { }

    productCount() {
        return this.http.get(`${this._url}/product-count`);
    }
}
