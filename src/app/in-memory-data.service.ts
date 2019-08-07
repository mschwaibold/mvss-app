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
        privileges: ['red-permission'],
      }];

    return { users };
  }
}
