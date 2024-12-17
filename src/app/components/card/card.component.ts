import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISuperhero } from 'src/app/models/ISuperhero.model';
import { HeroDataService } from 'src/app/services/hero-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() hero !:ISuperhero ; //le paso el heroe desde home para que lo pinte
  @Output() heroSelected: EventEmitter<ISuperhero> = new EventEmitter<ISuperhero>(); // Emite el Superhero cuando se selecciona

  constructor(private heroData: HeroDataService) { }

  ngOnInit(): void {
  }

  onSelectHero():void {
    this.heroData.setSelectedHero(this.hero); // Guarda en el servicio
    this.heroSelected.emit(this.hero); // Propaga el héroe hacia arriba
  }

}
