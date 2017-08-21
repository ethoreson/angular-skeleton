import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <table>
    <tr>
      <th>Species: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.species}}</td>
    <tr>
      <th>Name: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}</td>
    </tr>
    <tr>
      <th>Age: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.age}}</td>
    </tr>
    <tr>
      <th>Diet: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.diet}}</td>
    </tr>
    <tr>
      <th>Location: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.location}}</td>
    </tr>
    <tr>
      <th>Number of Caretakers: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.caretakers}}</td>
    </tr>
    <tr>
      <th>Sex: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.sex}}</td>
    </tr>
    <tr>
      <th>Likes: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.likes}}</td>
    </tr>
    <tr>
      <th>Dislikes: </th>
      <td *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.dislikes}}</td>
    </tr>
    <tr>
      <th>Edit: </th>
      <td *ngFor="let currentAnimal of childAnimalList"><button (click)='editButtonHasBeenClicked(currentAnimal)'>Edit</button></td>
    </tr>
  </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
