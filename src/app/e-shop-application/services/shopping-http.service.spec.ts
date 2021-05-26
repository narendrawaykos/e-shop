import { TestBed } from '@angular/core/testing';

import { ShoppingHttpService } from './shopping-http.service';

describe('ShoppingHttpService', () => {
  let service: ShoppingHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
