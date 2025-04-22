// pokemon-modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonModalService {
  private pokemonSource = new BehaviorSubject<any>(null);
  private visibleSource = new BehaviorSubject<boolean>(false);
  
  pokemon$ = this.pokemonSource.asObservable();
  visible$ = this.visibleSource.asObservable();

  get pokemon() {
    return this.pokemonSource.value;
  }

  get visible() {
    return this.visibleSource.value;
  }

  open(pokemon: any) {
    this.pokemonSource.next(pokemon);
    this.visibleSource.next(true);
  }

  close() {
    this.visibleSource.next(false);
  }
}
