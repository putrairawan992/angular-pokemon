// pokemon-card.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon: any;
  @Output() selected = new EventEmitter<any>();

  get pokemonTypes(): string {
    return this.pokemon.types.map((t: any) => t.type.name).join('/');
  }

  openModal() {
    this.selected.emit(this.pokemon);
  }
}
