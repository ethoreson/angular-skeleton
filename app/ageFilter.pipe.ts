import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "ageFilter",
  pure: false
})

export class ageFilterPipe implements PipeTransform {

  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    if(desiredAge === "twoAndUnder") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
        return output;
    } else if (desiredAge === "threeAndOlder") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
