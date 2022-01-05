# P4hApp
A Canvas Wrapper to help Haitian teachers communicate and facilitate teacher conferences

Folder Overview

- src: contains the actual app and its related code
- bin: holds any scripts using to setup, run the app, or any utlities outside of the actual app
- e2e: Angular installed this folder
- frontend: webpack used to serve its files here (currently moving to Angular's webpack)
- migrations: for sql database
- node_modules: any library we have downloaded goes here using "npm" 
- tmp: temporary files can be stored here for any reason
- .git: info about git
- assets: webpack will utilize this folder to compile sass into css (not using yet)
- static: the default location for any files that the flask server will need to serve - like images, and for now CSS/JS code until webpack is working again. 



ANGULAR INFO: 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
