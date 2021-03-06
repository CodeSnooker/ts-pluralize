[![Build Status](https://travis-ci.org/CodeSnooker/ts-pluralize.svg?branch=master)](https://travis-ci.org/CodeSnooker/ts-pluralize) [![Coverage Status](https://coveralls.io/repos/github/CodeSnooker/ts-pluralize/badge.svg?branch=master)](https://coveralls.io/github/CodeSnooker/ts-pluralize?branch=master)

# ts-pluralize
A Node.js module that returns the plural form of any noun

## Installation 
```sh
npm install ts-pluralize --save
yarn add ts-pluralize
bower install ts-pluralize --save
```
## Usage
### Javascript
```javascript
var pluralise = require('ts-pluralize');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'ts-pluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('ts-pluralize');
});
```
## Test 
```sh
npm run test
```