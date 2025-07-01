//Todo List
// Thing we need:
/* arrays to store taks 
event listeners to respond to clicks to create/remove tasks *maybe edit
need to be able to add and delete tasks to start */

// DOM elements 
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList"); 

//event listeners
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress",function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// array - store tasks 
var tasks = []; 

//add task function
function addTask() {
    var text = taskInput.value.trim();
    
    if (text === "") {
      alert("Please enter a task");
      return false;
    } else {
        // Add to array
    tasks.push(text);

    // create list item 
    // create task text
    // create edit button 
    // create delete button
    // append elements
// delete task function
//edit task function