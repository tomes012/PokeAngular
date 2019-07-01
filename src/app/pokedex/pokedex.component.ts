import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemon: Array<Object>;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.pokemon = this.data.pokedex;
  }

  goToRealPokedex(name){
    window.location.href = 'https://www.pokemon.com/us/pokedex/' + name;
  }

}
