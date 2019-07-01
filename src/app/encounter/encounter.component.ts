import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {

  pokemon: Object;

  catchPokemon(){
    this.data.addPokemon({
      name:this.pokemon['name'],
      sprite:this.pokemon['sprites']['front_default']
    });
    this.data.savePokeDex();
    window.location.href = "pokedex";
  }
  
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getRandomPokemon().subscribe(data => {
      this.pokemon = data
      }
    );
  }

}
