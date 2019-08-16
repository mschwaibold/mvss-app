import { AuthorizeDirective } from './authorize.directive';

describe('AuthorizeDirective', () => {
  it('should create an instance', () => {
    const directive = new AuthorizeDirective({} as any, {} as any, {
      currentUser: {
        subscribe(): any {
          return null;
        }
      }
    } as any, {} as any);
    expect(directive).toBeTruthy();
  });
});
