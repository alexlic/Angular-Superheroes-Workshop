import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'app/services/heroes.service';
import { Heroe } from 'app/models/heroe';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router,
     private _heroesService:HeroesService,
      private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  heroes:Heroe[] = [];

  buscarHeroe( termino:string ){
    if(termino.length>0){
      this.router.navigate(['/heroes',termino]);
    }
  }

}
