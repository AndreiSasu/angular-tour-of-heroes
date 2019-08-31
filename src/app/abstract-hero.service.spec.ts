import { TestBed } from '@angular/core/testing';

import { AbstractHeroService } from './abstract-hero.service';

describe('AbstractHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractHeroService = TestBed.get(AbstractHeroService);
    expect(service).toBeTruthy();
  });
});
