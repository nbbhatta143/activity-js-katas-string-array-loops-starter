/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 2, 2, 2, 3, 3, 4];
let uniqueArray = [];
let unique = document.querySelector("#unique");
let redundant = document.querySelector("#redundant");
let num = 0;
let remove = 0;

while (num < redundantArray.length) {
  if (redundantArray[num] === remove) {
    remove = redundantArray[num];
  } else {
    remove = redundantArray[num];
    uniqueArray.push(redundantArray[num]);
  }
  num += 1;
}
unique.innerHTML = uniqueArray;
redundant.innerHTML = redundantArray;
console.log(uniqueArray);
console.log(redundantArray);
// YOUR CODE HERE
