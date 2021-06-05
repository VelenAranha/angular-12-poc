# POC Angular-12:- _List github repos by github username_

Design a Github repositories listing page by passing the required Github username.

## Development

### Tech

- [Angular](https://angular.io/) version 12
- [node.js] - version 14

### Installation

```sh
npm i
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via Jasmine and Karma

Unit testing is written to following chunks

- HeaderComponent
- UserSearchComponent
- UpperMaxNumPipe
- UserService

### Running lint

Run `ng lint` to execute the code linting

Lint is enhanced by following plugins

- `@angular-eslint/recommended`
- `prettier/recommended`

### NPM libraries

| Libraries           | version  | details                                                   |
| ------------------- | -------- | --------------------------------------------------------- |
| ng-bootstrap        | [v9]()   | only using `NgbPaginationModule` and `NgbTypeaheadModule` |
| bootstrap           | [v5]()   |
| ngx-skeleton-loader | [link]() | intutive space filler while loading                       |

### TODO

- Handle API error exceptions

## License

MIT
