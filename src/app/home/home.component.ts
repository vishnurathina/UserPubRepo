import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public message = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.message = 'The App is consist of user list and home page.';
  }
  public logout() {
    this.authService.logout();
  }
}
