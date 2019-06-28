import { Injectable } from '@angular/core';
import {CurrentUser} from '../models'

@Injectable({ providedIn: 'root' })
export class JwtService {

    public getToken(): String {
        let currentUser:CurrentUser = this.getCurrentUser();

        if (currentUser) {
            return currentUser.token;
        }
        return null;
    }

    public getCurrentUser(): CurrentUser {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    /**
     * Store user details and jwt token in local storage to keep user logged in between page refreshes
     * @param user
     */
    public saveCurrentUser(user: CurrentUser) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    public destroyCurrentUser() {
        localStorage.removeItem('currentUser');
    }

}