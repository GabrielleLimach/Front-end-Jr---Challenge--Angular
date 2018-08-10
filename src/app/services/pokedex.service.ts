import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../core/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons:Array <Pokemons>= [];
  
  //url da api
  pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/'

 
  

  constructor(
    private http: HttpClient
  ) { }

  Consultas(parameter:any): Observable<any>{
    return this.http.get(this.pokemonUrl + (parameter ? parameter : ''));
  }

  deletar (id, url): Observable<any>{
    return this.http.delete(url+id+"/");
   }

}
