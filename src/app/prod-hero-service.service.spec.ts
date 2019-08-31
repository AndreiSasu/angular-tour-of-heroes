import { TestBed } from '@angular/core/testing';

import { ProdHeroServiceService } from './prod-hero-service.service';

describe('ProdHeroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdHeroServiceService = TestBed.get(ProdHeroServiceService);
    expect(service).toBeTruthy();
  });
});
