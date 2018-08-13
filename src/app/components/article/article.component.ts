import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    id:any;
    pokeinfo: any;
    adcpoke = [];

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit() {
  }  

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
   if(this.adcpoke.push(this.pokeinfo)) {
    alert('Pokemon capturado com sucesso')
   } else{
    alert('Não foi dessa vez');
   }
  }

   removerPokemon(pokemon:any){
    if(this.adcpoke.splice(pokemon, 1)){
      alert('Pokemon removido com sucesso')
    }
     console.log(this.adcpoke);
   }
}
