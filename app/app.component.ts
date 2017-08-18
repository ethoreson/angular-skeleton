import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>Animals</h3>
    <table>
      <tr>
        <th>Species: </th>
        <td *ngFor="let currentAnimal of animals">{{currentAnimal.species}}</td>
      <tr>
        <th>Name: </th>
        <td *ngFor="let currentAnimal of animals">{{currentAnimal.name}}</td>
      </tr>
      <tr>
        <th>Edit: </th>
        <td *ngFor="let currentAnimal of animals"><button (click)='editAnimal(currentAnimal)'>Edit</button></td>
      </tr>
    </table>
    <div>
      <h3>Edit Animal</h3>
      <label>Edit Animal Name</label>
      <input [(ngModel)]="selectedAnimal.name">
      <label>Enter Animal Age</label>
      <input [(ngModel)]="selectedAnimal.age">
      <label>Enter number of Caretakers:</label>
      <input [(ngModel)]="selectedAnimal.caretakers">
    </div>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
  new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'northern trail', 5, 'female', 'cool shade', 'loud noises'),
  new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'tropical rain forest building', 6, 'male', 'laying in the sunshine', 'toys that are not rope-based'),
  new Animal('northwest black tailed deer', 'tinkerbell', 8, 'Herbivore', 'northern trail', 2, 'female', 'delicate roots and leaves', 'loud noises')
  ];
  selectedAnimal: Animal = this.animals[0];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) { }
}
