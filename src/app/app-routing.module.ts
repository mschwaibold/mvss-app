import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { TanksComponent } from './tanks/tanks.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'tanks', component: TanksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
