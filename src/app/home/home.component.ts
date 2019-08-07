import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  public isLoggedIn = false;

  constructor(private authenticationService: AuthenticationService) {
    this.subscription.add(authenticationService.currentUser.subscribe(u => this.isLoggedIn = !!u ));
  }

  login(userId: number): void {
    this.authenticationService.login(userId);
  }

  logout(): void {
    this.authenticationService.logout();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
