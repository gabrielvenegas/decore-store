import { Injectable } from '@angular/core';
@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    constructor() { }
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        if (token)
            return true;
    }

    public logout(): boolean {
        localStorage.clear();
        return true;
    }
}