// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { PokemonModalService } from './components/pokemon-modal/pokemon-modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonListComponent, PokemonModalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pokemon-angular';

  constructor(private modalService: PokemonModalService) {}

  showModal(pokemon: any) {
    this.modalService.open(pokemon);
  }

  closeModal() {
    this.modalService.close();
  }
}