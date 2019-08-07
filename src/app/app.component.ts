import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthenticationService } from './_services/authentication.service';
import { AuthenticatedUser } from './_models/authenticatedUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mvss-app';
  isLoggedIn = false;

  users = [
    { key: 1, value: 'Developer' },
    { key: 2, value: 'Accountant' }
  ];

  selectedUser = 1;

  constructor(private authenticationService: AuthenticationService) {
    authenticationService.currentUser.subscribe(u => this.isLoggedIn = !!u);
  }

  login(userId: number): void {
    this.authenticationService.login(userId);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
