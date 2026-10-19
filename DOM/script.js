const countElement = document.querySelector("#count");
const decreaseButton = document.querySelector("#decrease");
const increaseButton = document.querySelector("#increase");
const resetButton = document.querySelector("#reset");

//Declare the count initial
let count = 0;

//function to increase the count
function increaseCount (){
    count++;
     countElement.textContent = count; 
}

//function to update the display on the screen
function updateDisplay(){
    countElement.textContent = count;
}

//listen for clicks on the increase button
increaseButton.addEventListener("click", increaseCount);


//listen for clicks on the decrease button
decreaseButton.addEventListener("click", function(){
    count--;
    updateDisplay();
});

//listen for clicks on the reset button
resetButton.addEventListener("click", function(){
    count = 0;
     updateDisplay();
});