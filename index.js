//test stampit behaviours specially using module.exports in conjunction
'use strict';
const stampit = require('stampit');
const Animal  = require('./animal');
const Feline  = require('./feline');

const Cat    = stampit.compose(Animal, Feline);
let whiskers = Cat({name: 'Whiskers'});

//Animal methods
whiskers.walk();
whiskers.breathe();

//Feline methods
whiskers.meow();
console.log(whiskers.getLives());

//alls working
//now lets check some extensibility
//Cats name
console.log(whiskers.name);
