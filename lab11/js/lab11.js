/*
 * Author:  Ethan Lepe <emlepe@ucsc.edu>
 * Created:  17 February
 * License:  Public Domain
 */
 // Libraries & jquery

 // add event handler for red button
$("button.red").click(function(){
  // remove possible existing class
  $("#target").removeClass("green");
  // now toggle red class
  $("#target").toggleClass("red")
});
// add event handler for green button
$("button.green").click(function(){
  // remove possible existing class
  $("#target").removeClass("red");
  // now toggle red class
  $("#target").toggleClass("green");
});
