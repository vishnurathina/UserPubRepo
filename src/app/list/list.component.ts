import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public logout() {
    this.authService.logout();
  }
}
