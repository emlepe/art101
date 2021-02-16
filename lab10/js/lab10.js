/*
 * Author:  Ethan Lepe <emlepe@ucsc.edu>
 * Created:  15 February
 * License:  Public Domain
 */

// Javascript Events and Forms
function sortUserName() {
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // userName.toLower().split("").sort().join("")
    return nameSorted;
}

// Output
document.writeln("Thar output lay straight ahead lads: ",
  sortUserName(), "</br>");
