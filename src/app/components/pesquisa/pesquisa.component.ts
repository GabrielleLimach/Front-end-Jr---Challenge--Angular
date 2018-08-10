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

  adcionarPokemon(f:NgForm){
   this.adcpoke.push(this.pokeinfo);
   console.log(this.adcpoke);
  }

  removerPokemon(pokemon:any){
   this.adcpoke.splice(pokemon, 1);
    console.log(this.adcpoke);


  }
}
