import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISuperhero } from 'src/app/models/ISuperhero.model';
import { HeroDataService } from 'src/app/services/hero-data.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {
  hero :ISuperhero| null = null;
  subscription!: Subscription;

  constructor(private heroData: HeroDataService) { }

  ngOnInit(): void {
    this.subscription = this.heroData.getSelectedHero().subscribe((respuesta) => {
                        this.hero = respuesta;
                        console.log(this.hero)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
