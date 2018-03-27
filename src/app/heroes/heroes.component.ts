import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import {HEROES} from '../list-heroes';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero = 'Windstorm';
  /*hero: Hero = {
    id: 1,
    name: 'Phuc'
  };*/
  selectedHero:Hero;
  heroes:Hero[];
  constructor(private heroService:HeroService) 
  { 

  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes()                //<=>this.heroes = this.heroService.getHeroes();
    .subscribe(heroes=>this.heroes=heroes);
  }
  onSelect(hero:Hero){
    this.selectedHero=hero;
  }
}
