// pokemon-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonService } from '../../services/pokemon.service';
// ...

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Output() selected = new EventEmitter<any>(); // ⬅️ Emit ke luar (AppComponent)

  pokemons: any[] = [];
  currentPage = 1;
  perPage = 10;
  max = 151;
  loading = false;

  constructor(private pokemonService: PokemonService) {
    this.loadPokemons();
  }

  loadPokemons() {
    this.loading = true;
    this.pokemonService.getPokemonList(0, 20).subscribe((data: any[]) => {
      this.pokemons = data;
      this.loading = false;
    });
  }

  loadPage(page: number) {
    const offset = (page - 1) * this.perPage;
    this.loading = true;
    this.pokemonService.getPokemonList(offset, this.perPage).subscribe((data: any[]) => {
      this.pokemons = data;
      this.loading = false;
      this.currentPage = page;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.max / this.perPage);
  }

  get pages(): number[] {
    const total = this.totalPages;
    const cp = this.currentPage;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (cp <= 4) return [1, 2, 3, 4, 5];
    if (cp >= total - 3) return [total - 4, total - 3, total - 2, total - 1, total];
    return [cp - 2, cp - 1, cp, cp + 1, cp + 2];
  }

  selectPokemon(pokemon: any) {
    this.selected.emit(pokemon); // ⬅️ Kirim ke parent
  }
}
