import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero-service';
import { MockHeroService } from './mock-hero.service';

describe('AbstractHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(MockHeroService);
    expect(service).toBeTruthy();
  });
});
