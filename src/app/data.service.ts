import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pokedex: Array<Object> = [];

  constructor(private http: HttpClient) {
    const localPokemon = localStorage.getItem('pokedex');
    if(localPokemon) this.pokedex = JSON.parse(localPokemon);
  }

  getRandomPokemon() {
    const index  = Math.floor(Math.random() * 500) + 1;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}/`);
  }

  addPokemon(pokemon){
    this.pokedex.push(pokemon);
  }

  savePokeDex(){
    localStorage.setItem('pokedex',JSON.stringify(this.pokedex));
  }

  emptyPokeDex(){
    localStorage.setItem('pokedex','');
  }

}
