import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationNode } from '../_models/navigationNode';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  @Input() items: NavigationNode[];
  @ViewChild('childMenu', { static: true }) public childMenu: MatMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
