// pokemon-modal.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModalService } from './pokemon-modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent {
  pokemon$: Observable<any>;
  visible$: Observable<boolean>;

  constructor(private modalService: PokemonModalService) {
    this.pokemon$ = this.modalService.pokemon$;
    this.visible$ = this.modalService.visible$;
  }

  closeModal() {
    this.modalService.close();
  }

  getTypes(pokemon: any): string {
    return pokemon?.types?.map((t: any) => t.type.name).join('/') || '';
  }

  getAbilities(pokemon: any): string {
    return pokemon?.abilities?.map((a: any) => a.ability.name).join(', ') || '';
  }

  getMoves(pokemon: any): string {
    return pokemon?.moves?.map((m: any) => m.move.name).join(', ') || '';
  }
}
  
