import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor() {}

  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero) {
    this.selectedHero = hero;
  }

  ngOnInit(): void {}
}
