class Animal {

  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){
  }
}

var animals: Animal[] = [];
animals.push(new Animal('Arctic Fox', 'Moon', 2, 'carnivore', 'norther trail', 5, 'female', 'cool shade', 'loud noises'));
console.log(animals);
