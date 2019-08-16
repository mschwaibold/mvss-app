import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: NavigationService = TestBed.get(NavigationService);
    expect(service).toBeTruthy();
  });
});
