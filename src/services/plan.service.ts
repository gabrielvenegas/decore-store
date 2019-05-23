import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable()
export class PlanService {
    url = environment.url;
    constructor(private http: HttpClient) { }

    getPlans() {
        return this.http.get(`${this.url}/plan`);
    }
}