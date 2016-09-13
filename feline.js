'use strict';
const stampit = require('stampit');
const Feline = stampit().methods({
  meow: function() {
    console.log('meowing...');
  }
})
.enclose(function() {
  let lives = 7;
  this.getLives = function() {
    return lives;
  }
});
module.exports = Feline;
