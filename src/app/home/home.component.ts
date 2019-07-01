import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemon: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getRandomPokemon().subscribe(data => {
      this.pokemon = data
      }
    );
  }
}
