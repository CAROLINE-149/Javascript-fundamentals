const countElement = document.querySelector("#count");
const decreaseButton = document.querySelector("#decrease");
const increaseButton = document.querySelector("#increase");
const resetButton = document.querySelector("#reset");

//Declare the count initial
let count = 0;


//function to update the display on the screen
function updateDisplay() {
  countElement.textContent = count; //update the count

  //changing the colour of the count upon increase/decrease
  //remove the classes first
  countElement.classList.remove("positive","negative");

//   //add the classes based on the condition
//   if(count>0){
//     countElement.classList.add("positive");
//   }
//   else if(count<0){
//     countElement.classList.add("negative");
//   }
}

//listen for clicks on the increase button
increaseButton.addEventListener("click", function(){
    count++;
    updateDisplay();
    countElement.classList.add("positive");
});

//listen for clicks on the decrease button
decreaseButton.addEventListener("click", function () {
  count--;
  updateDisplay();
  countElement.classList.add("negative");
});

//listen for clicks on the reset button
resetButton.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
