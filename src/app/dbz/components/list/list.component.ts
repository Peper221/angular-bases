import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: 'adsd',
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id? :string) : void {
    if(!id) return;
     this.onDelete.emit(id);
  }
}
