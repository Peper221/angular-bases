import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  get capitalizeName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'SpiderMan';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
