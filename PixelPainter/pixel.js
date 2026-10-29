const colorPicker = document.querySelector("#color-picker");
const gridSize = document.querySelector("#grid-size");
const clearButton = document.querySelector("#clear-btn");
const grid = document.querySelector("#grid");

let isDrawing = false;

//function to create grid
function createGrid(size) {
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  };
};

gridSize.addEventListener("change", function () {
  const size = Number(gridSize.value);
  createGrid(size);
});

//clicking a cell to add color to it
grid.addEventListener("click", function (event) {
  if (event.target.classList.contains("cell")) {
    event.target.style.backgroundColor = colorPicker.value;
  }
});


grid.addEventListener("mousedown",function(event){
    isDrawing = true;
    console.log(`Drawing is ${isDrawing}`)
});

grid.addEventListener("mouseUp", function(event){
    isDrawing = false;
    console.log(`Drawing is ${isDrawing}`)
});
