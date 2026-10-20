const themeButton = document.querySelector("#theme");
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const themeToggle = document.querySelector("#theme");

themeToggle.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

//function that builds a task and adds it to the list
function addTask(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  const completedBtn = document.createElement("button");

  //add a class for the buttons
  deleteButton.classList.add("delete");
  completedBtn.classList.add("completed")

  //Attaching content to the elements
  span.textContent = text;
  deleteButton.textContent = "Delete";
  completedBtn.textContent = "Completed";

  //attaching behaviour to the buttons
  completedBtn.addEventListener("click", function () {
    span.classList.toggle("done");
  });

  //Deleting a task
  deleteButton.addEventListener("click", function () {
    li.remove();
  });



  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(completedBtn);
  list.appendChild(li);
}

//Handle the form submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); //stops the page from loading

  const text = input.value.trim(); //get the text, strip extra space
  if (text === "") return; //ignore empty tasks

  addTask(text);

  input.value = ""; //clear the input
  input.focus(); //ready for the next task

  console.log(event);

});
