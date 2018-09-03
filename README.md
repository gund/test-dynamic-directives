# TestDynamicDirectives

Here I'm investigating the possibility to apply
directives to dynamically rendered components
in Angular.

### The goals:
- ~~Support basic directives attachment with
correct injector~~ [DONE]
- ~~Support basic life-cycle hooks~~ [DONE]
- Support inputs and outputs
- Support `OnChanges` hook for inputs
- Support different queries (`@HostBinding`, `@ViewChild` etc.)

Once all of above will be achieved
(or at least first 4) then it can be
implemented and included in [`ng-dynamic-component`](https://github.com/gund/ng-dynamic-component).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
