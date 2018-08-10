export class Pokemons{

    id: number;
    name: string;
    type: string;
    height: string;
    size:string;
    url: string;

    constructor(data) {
      this.id = data.id;
      this.name = data.name;
      //this.sprite = data.sprites.front_default;
      this.type = data.types[0].type.name;
      this.height =data.height;
      this.size = data.size;
      this.url = data.url;
    }
  }
export class Cont{
  count: number;
  next:string;
  previous:boolean;
  results: Results

  constructor(){
    this.results = new Results();
  }
}
export class Results{
  url:string;
  name:string;
  forms:Forms

  constructor(){
    this.forms = new Forms();
  }
}

export class Forms{
  abilities:string;
}


