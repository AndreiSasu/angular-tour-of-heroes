import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

export interface AbstractHeroService {

  getHeroes(): Observable<Hero[]>;

  getHero(id: number): Observable<Hero>;

  updateHero(hero: Hero): Observable<any>;

  addHero(hero: Hero): Observable<Hero>;

  deleteHero(hero: Hero | number): Observable<Hero>;

  searchHeroes(term: string): Observable<Hero[]>;
}
