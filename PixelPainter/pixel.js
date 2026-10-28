const colorPicker = document.querySelector("#color-picker");
const gridSize = document.querySelector("#grid-size");
const clearButton = document.querySelector("#clear-btn");
const Grid = document.querySelector("#grid");

//Creating the 16*16 grid
const rows = 16;
const columns = 16;
const totalCells = rows*columns;

//loop to create the cells
for(let i = 1; i<=totalCells; i++){

    //create a new element div
   const cell = document.createElement("div");

   //add a class to it
   cell.classList.add("cell");

   //display the content
   cell.textContent = i;

   Grid.appendChild(cell);
}
