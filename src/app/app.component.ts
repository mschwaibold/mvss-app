import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './_services/authentication.service';
import { NavigationService } from './_services/navigation.service';
import { NavigationNode } from './_models/navigationNode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mvss-app';
  isLoggedIn = false;

  menuNodes: Observable<NavigationNode[]>;

  users = [
    { key: 1, value: 'Developer' },
    { key: 2, value: 'Accountant' }
  ];

  selectedUser = 1;

  constructor(private authenticationService: AuthenticationService, private navigationService: NavigationService, private router: Router) {
    authenticationService.currentUser.subscribe(u => this.isLoggedIn = !!u);
    this.menuNodes = navigationService.getNavigationMenu();
  }

  login(userId: number): void {
    this.authenticationService.login(userId);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

}
