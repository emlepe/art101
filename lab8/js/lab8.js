/*
 * Author:  Ethan Lepe <emlepe@ucsc.edu>
 * Created:  8 February
 * License:  Public Domain
 */
 // defining functions
 function firstThing(test) {
   console.log(test + ": This is the first thing.<br>")
 }
 function secondThing(test) {
   console.log(test + ": This is the second thing.<br>")
 }
 function thirdThing(test) {
   console.log(test + ": This is the third thing.<br>")
 }

 firstThing("TEST 1");
 secondThing("TEST 2");
 thirdThing("TEST 3");
 // in order
 setTimeout(function() {
   firstThing("TEST 2");
}, 0);
setTimeout(function() {
  secondThing("TEST 2");
}, 0);
setTimeout(function() {
  thirdThing("TEST 2");
}, 0);
// second, third, then first thing
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);
setTimeout(function() {
  secondThing("TEST 3");
}, 1000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 0);
