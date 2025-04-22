import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(offset: number, limit: number): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}?offset=${offset}&limit=${limit}`).pipe(
      switchMap(res => {
        const detailRequests = res.results.map((pokemon: any) => this.http.get(pokemon.url));
        return forkJoin(detailRequests).pipe(map(results => results as any[]));
      })
    );
  }
}