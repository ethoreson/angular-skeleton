import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="twoAndUnder">Animals 2 and under</option>
    <option value="threeAndOlder">Animals 3 and over</option>
  </select>

  <table>
    <tr>
      <th>Species: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.species}}</td>
    <tr>
      <th>Name: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.name}}</td>
    </tr>
    <tr>
      <th>Age: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.age}}</td>
    </tr>
    <tr>
      <th>Diet: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.diet}}</td>
    </tr>
    <tr>
      <th>Location: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.location}}</td>
    </tr>
    <tr>
      <th>Number of Caretakers: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.caretakers}}</td>
    </tr>
    <tr>
      <th>Sex: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.sex}}</td>
    </tr>
    <tr>
      <th>Likes: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.likes}}</td>
    </tr>
    <tr>
      <th>Dislikes: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge">{{currentAnimal.dislikes}}</td>
    </tr>
    <tr>
      <th>Edit: </th>
      <td *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge"><button (click)='editButtonHasBeenClicked(currentAnimal)'>Edit</button></td>
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

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
