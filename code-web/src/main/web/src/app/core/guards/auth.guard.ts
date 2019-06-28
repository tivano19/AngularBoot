import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {JwtService} from "../services/jwt.service";
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private jwtService: JwtService, private cookieService: CookieService ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("Cookes ----------")
        console.log(this.cookieService.get('X-CSRF'))
        if (this.jwtService.getCurrentUser()) {
            console.log("current user logged in so return true");
            return true;
        }
        console.log("cnot logged in so redirect to login page with the return url");
        //FIXME:
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return true;
    }
}