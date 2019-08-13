import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationNode } from '../_models/navigationNode';
import { MatMenu } from '@angular/material';
import { NavItem } from '../_models/nav-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() items: NavItem[];
  @ViewChild('childMenu', { static: true }) public childMenu: MatMenu;

  constructor() {
  }

  ngOnInit() {
    console.log(JSON.stringify(this.items));
  }

}
