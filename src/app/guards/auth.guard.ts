import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isRouteActivated(route);
  }

  private isRouteActivated(route: ActivatedRouteSnapshot) {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate([`login`]);
    return false;
  }
}
