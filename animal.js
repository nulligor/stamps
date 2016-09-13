'use strict';
const stampit = require('stampit');
const Animal = stampit().methods({
  breathe: function() {
    console.log('breathing...');
  },
  walk: function() {
    console.log('walking...');
  }
});
module.exports = Animal;
