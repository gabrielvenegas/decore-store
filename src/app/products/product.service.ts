import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable(
    { providedIn: 'root' }
)
export class ProductService {
    private _url = `${environment.url}/product`;
    constructor(private http: HttpClient) { }

    get(): Observable<any[]> {
        return this.http.get<any[]>(this._url);
    }

    getOne(id: number): Observable<any[]> {
        return this.http.get<any[]>(`${this._url}/${id}`);
    }

    create(plan): Observable<any> {
        return this.http.post(this._url, plan);
    }

    update(plan): Observable<any> {
        return this.http.patch(this._url, plan);
    }

    getCategories(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.url}/utils/category`);
    }

    getColors(): Observable<any[]> {
        return this.http.get<any[]>(`${environment.url}/utils/color`);
    }
}