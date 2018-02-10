import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  term:string;

  constructor( private _heroesService: HeroesService,
                private activateRoute:ActivatedRoute,
                private router:Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{
      if(typeof params['termino']!== 'undefined'){
        this.heroes = this._heroesService.buscarHeroes(params.termino);
        this.term = params['termino'];
      }
    });
    this.heroes = this._heroesService.getHeroes();
  }

  //Return heroe information
  infHeroe(idx: number){
    this.router.navigate(['/heroe',idx]);
  }

}
