import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService,
                private router:Router) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
  }

  //Return heroe information
  infHeroe(idx: number){
    this.router.navigate(['/heroe',idx]);
  }

}
