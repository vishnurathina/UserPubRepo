import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private route: Router) {}

  public login(data: User) {
    if (data.username === 'admin' && data.password === 'admin') {
      window.localStorage.setItem('token', 'asdf');
      //this.route.navigate(['home']);
      this.route.navigate(['list']);
    }
  }

  public logout() {
    window.localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

  public isAuthenticated() {
    return window.localStorage.getItem('token') !== null;
  }
}
