import { Injectable } from '@angular/core';
import { AuthenticatedUser } from '../_models/authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private isDeveloper(user): boolean {
    return !!user && user.privileges.includes('Developer');
  }

  hasPrivilege(user: AuthenticatedUser, privilege: string): boolean {
    console.log(`{User has privilege ${privilege}: ${!!user && (this.isDeveloper(user) || user.privileges.includes(privilege))}`);
    return !!user && (this.isDeveloper(user) || user.privileges.includes(privilege));
  }
}
