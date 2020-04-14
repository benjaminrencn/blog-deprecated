const _ = require('lodash');
let people = [
  { name: 'James', age: 20 },
  { name: 'Jason', age: 21 },
  { name: 'David', age: 20 },
  { name: 'Ethan', age: 22 }
];
let getProp = _.curry((key, obj) => obj[key]);
let names = people.map(getProp('name'));
let ages = people.map(getProp('age'));
console.log(names); // [ 'James', 'Jason', 'David', 'Ethan' ]
console.log(ages); // [ 20, 21, 20, 22 ]