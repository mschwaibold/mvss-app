import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuComponent } from './nav-menu.component';
import { Directive, Input, NO_ERRORS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Directive({ selector: '[appAuthorize]' })
class AuthorizeDirectiveStub {
  @Input()
  public set appAuthorize(value: string) {
  }
}

@Directive({ selector: '[routerLink]' })
class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
}

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ NavMenuComponent, AuthorizeDirectiveStub, RouterLinkDirectiveStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
