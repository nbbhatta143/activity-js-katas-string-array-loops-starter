/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. 
  3. Write a WHILE statement which loops over the "word" string and
     counts the number of times the "letter" appears.
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to get user input
     for the "letter" variable in Step 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!

*/
let searchButton = document.querySelector("#button");

searchButton.addEventListener("click", function () {
  let wordSearch = document.querySelector("#word").value.trim().toLowerCase();
  let letterSearch = document
    .querySelector("#letter")
    .value.trim()
    .toLowerCase();
  let display = document.querySelector("#display");
  let count = 0;
  let num = 0;
  while (count < wordSearch.length) {
    if (wordSearch[count].includes(letterSearch)) {
      num += 1;
    }
    count += 1;
  }
  if (num > 0) {
    display.innerHTML =
      "The letter " +
      "'" +
      letterSearch +
      "'" +
      " exists " +
      num +
      " time in this word!";
  } else {
    display.innerHTML =
      "Nope, " + "'" + letterSearch + "'" + " doesn't exist in this word!";
  }
});

// YOUR CODE HERE
