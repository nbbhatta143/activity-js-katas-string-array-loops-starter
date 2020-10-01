/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/
let height = [];
let button = document.querySelector("#submitButton");

button.addEventListener("click", function () {
  //   let count = 0;
  //   let tallest = 0;
  let userInput = document.querySelector("#numbers").value;
  height.push(Number(userInput));
  //   while (count < height.length) {
  //     if (height[count] > tallest) {
  //       tallest = height[count];
  //     }
  //     count += 1;
  //   }
  console.log(height);
});
let resultButton = document.querySelector("#resultButton");

resultButton.addEventListener("click", function () {
  let showResult = document.querySelector("#showResult");
  let count = 0;
  let tallest = 0;
  while (count < height.length) {
    if (height[count] > tallest) {
      tallest = height[count];
    }
    count += 1;
  }
  showResult.innerHTML = tallest + " is the heighest mountain height!";
});
