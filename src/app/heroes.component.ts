import { Component,Input } from '@angular/core';
import { Hero } from './hero';
import  { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import {OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls:['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero : Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  onSelect(hero : Hero){
    this.selectedHero = hero;
  }
    
  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }
  ngOnInit():void{
    this.getHeroes();
  }
 
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}
