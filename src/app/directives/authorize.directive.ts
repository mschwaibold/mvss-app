import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {NgIf} from '@angular/common';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appAuthorize]'
})
export class AuthorizeDirective implements OnInit{

  private userDummy = {
    Id: 1,
    privileges: [
      'green-permission'
    ]
  };

  private privilege: string;
  private ngIfDirective: NgIf;
  // private isLoggedInSubs: Subscription;

  @Input()
  public set appAuthorize(value: string) {
    console.log(value);
    this.privilege = value;
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    if (!this.ngIfDirective) {
      this.ngIfDirective = new NgIf(this.viewContainer, this.templateRef);
    }
  }

  setNgIf() {
    this.ngIfDirective.ngIf = this.userDummy.privileges.includes(this.privilege);
    console.log('Privilege: ' + this.privilege);
  }

  ngOnInit(): void {
    this.setNgIf();
  }

}
