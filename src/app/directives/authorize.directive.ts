import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { AuthenticatedUser } from '../_models/authenticatedUser';
import { AuthenticationService } from '../_services/authentication.service';

@Directive({
  selector: '[appAuthorize]'
})
export class AuthorizeDirective implements OnInit, OnDestroy {

  private privilege: string;
  private ngIfDirective: NgIf;
  private isLoggedInSubs: Subscription;

  @Input()
  public set appAuthorize(value: string) {
    // console.log(value);
    this.privilege = value;
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
              private authenticationService: AuthenticationService, private userService: UserService) {
    if (!this.ngIfDirective) {
      this.ngIfDirective = new NgIf(this.viewContainer, this.templateRef);
    }

    this.isLoggedInSubs = authenticationService.currentUser.subscribe(() => {
      return this.setNgIf();
    });
  }

  setNgIf() {
    this.ngIfDirective.ngIf = this.userService.hasPrivilege(this.authenticationService.currentUserValue, this.privilege);
    // console.log('Privilege: ' + this.privilege);
  }

  ngOnInit(): void {
    this.setNgIf();
  }

  ngOnDestroy(): void {
    this.isLoggedInSubs.unsubscribe();
  }

}
