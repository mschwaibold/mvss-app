import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        id: 1,
        firstName: 'Max',
        lastName: 'Schwaibold',
        privileges: ['Developer'],
      },
      {
        id: 2,
        firstName: 'Max',
        lastName: 'Mustermann',
        privileges: ['green-permission', 'VehiclesView', 'CarsView'],
      }];
    const menu = [
      {
        id: 1,
        title: 'Welcome',
        url: 'home'
      },
      {
        id: 2,
        title: 'Vehicles',
        privilege: 'VehiclesView',
        children: [
          {
            title: 'Cars',
            url: 'cars',
            privilege: 'CarsView'
          },
          {
            title: 'Tanks',
            url: 'tanks',
            privilege: 'TanksView'
          }
        ]
      }
    ];

    return { users, menu };
  }
}
