export class Example{

    id: number;
    name: string;
    type: string;
    height: string;
    size:string;
    url: string;
    sprite: ImageData;

    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.sprite = data.sprites.front_default;
      this.type = data.types[0].type.name;
      this.type = data.abilities[0].ability.name;
      this.height =data.height;
      this.size = data.size;
      this.url = data.url;

    }
  }
  export class Forms{
    url: string;
    name: string;
  }
  
  export class Abilities{
    slot: string;
    is_hidden: boolean;
    ability: Ability
  
    constructor(){
      this.ability = new Ability();
    }
  }
  export class Ability{
    url: string;
    name: string;
  }
  
  export class Stats{
    stat:Stat
    effort: number;
    base_stat: number;

    constructor(){
      this.stat = new Stat();
    }
  }
  export class Stat{
    url:string;
    name:string;
  }
  
  export class Pokemons{
    id:number;
    name: string;
    weight: number;
    moves: Moves;
    height: number;
    types: Types;

    constructor(){
      this.moves = new Moves();
      this.types = new Types();
    }

  }
  
  export class Moves{
    move:Move;

    constructor(){
      this.move = new Move();
    }
  }
  
  export class Move{
    url:string;
    name:string;
  }
  export class Sprites{
    front_default:string;
  }
  
  export class Types{
    slot:number;
    type:Type

    constructor(){
      this.type = new Type();
    }
  }
  export class Type{
    url:string;
    name:string;
  }  