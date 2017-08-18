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
