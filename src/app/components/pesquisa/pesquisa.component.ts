import { PokedexService } from './../../services/pokedex.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  id :any;
  adcpoke = [];
  pokes = this.pokedexService.pokemons;
  pokeinfo: any;
  pokee: any;
  poke1: any;
  pokemon: {};

  monsUrl = 'http://pokeapi.co/api/v2/pokemon/1/';

  constructor( 
    private pokedexService: PokedexService,
    
  ) { }

  ngOnInit() { }

  pesquisaPokemons(f: NgForm){
    if(f.valid) {
      this.pokedexService.Consultas(this.id).subscribe(
        data => {
          this.pokeinfo = data;
        });
    } else {
      alert('obrigatório!');
    } 
  }

 
}
