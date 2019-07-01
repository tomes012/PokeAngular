import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EncounterComponent } from './encounter/encounter.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'encounter',component:EncounterComponent},
  {path:'pokedex',component:PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
