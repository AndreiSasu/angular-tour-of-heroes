import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractHeroService {

  constructor() { }

  abstract getHeroes(): Observable<Hero[]>;

  abstract getHero(id: number): Observable<Hero>;
}
