# Local Zoo
by Emilie Thoreson

## Installation

* git clone<repository-url> this repository
* cd angular-skeleton
* npm install
* npm install bower -g
* bower init
* bower install bootstrap --save
* gulp build
* gulp serve

## Planning

1. Configuration/Dependencies:
Bower - manages front-end plugins.
Vendor - directory where front-end dependencies not managed by Bower are.
Bootstrap - Adds stylings
Everything listed in bower.json - preloaded when app runs
HTML - Instrumental in webpage setup

2. Specs
Following along with instructions:
* List out animals and their details
* Create form for new animal
* Dynamically update animal (edit existing animal)
* Filter animals displayed based on age

3. Integration
ageFilter.pipe.ts - Backend logic for filtering animals by age
animal-list.component.ts - front-end for listing all animals
animal.model.ts - animal constructor
app.component.ts - backend AppComponent, listing other .component files
app.module.ts -  Module for project
edit-animal.component.ts - front-end for editing animal
main.ts - boostrap module
new-animal.component.ts - front end for new animal form

4. UI
* Boostrap

5. Polish
* DRY out animal-list component
* turn index into <table> instead of <ul>
* Update README

### User Stories

As a user…

* I want to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike.
* I want to view a list of animals I have logged.
* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
* I want to click an animal to edit its name, age or caretakers.

### Future Goals

* Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.
* Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.
* Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)
* Add a new master component to average the total age for each species.

### Bugs

No known bugs.

### Contact

Emilie Thoreson: thoresonemilie@gmail.com

### License

MIT License.
