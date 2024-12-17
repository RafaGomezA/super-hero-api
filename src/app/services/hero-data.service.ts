import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISuperhero } from '../models/ISuperhero.model';

@Injectable({
  providedIn: 'root'
})

export class HeroDataService {

  private selectedHeroSubject : BehaviorSubject<ISuperhero | null> = new BehaviorSubject<ISuperhero | null>(null)

  constructor() { }

// Método para obtener el heroe seleccionado
  getSelectedHero() {
    return this.selectedHeroSubject.asObservable(); // Devuelve un observable
  }

// Método para seleccionar un pescado
  setSelectedHero(hero: ISuperhero): void {
    this.selectedHeroSubject.next(hero); // Establece el hero seleccionado
  }


}
