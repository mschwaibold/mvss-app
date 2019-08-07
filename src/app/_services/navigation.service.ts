import { Injectable } from '@angular/core';
import { NavigationNode } from '../_models/navigationNode';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient, navigationService: NavigationService) {
  }

  getNavigationMenu(): Observable<NavigationNode[]> {
    return this.http.get<NavigationNode[]>('api/menu');
  }
}
