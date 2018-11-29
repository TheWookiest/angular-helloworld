import { Component, OnInit } from '@angular/core';
import {Hero} from '../../entity/hero';
import {HeroService} from '../../services/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Lol'
  }

  heroes: Hero[];

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }

}
