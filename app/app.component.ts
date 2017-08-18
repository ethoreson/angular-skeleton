import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <h3>Animals</h3>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing($event)"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'northern trail', 5, 'female', 'cool shade', 'loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'tropical rain forest building', 6, 'male', 'laying in the sunshine', 'toys that are not rope-based'),
    new Animal('northwest black tailed deer', 'tinkerbell', 8, 'Herbivore', 'northern trail', 2, 'female', 'delicate roots and leaves', 'loud noises')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
