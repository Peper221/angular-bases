import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name:'Goku',
    power: 8000
  }

];

  addCharacter( character:Character): void {

    /*se utiliza el spread para tener
      un nuevo objeto con los datos de otro
      con el id nuevo
    */
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter (index:number): void {
  //   this.characters.splice(index,1)
  // }

  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

  constructor() { }

}
