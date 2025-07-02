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
    var listEl = document.createElement("li");
    // create task text - apparently needed to edit 
    var taskText = document.createElement("span");
    taskText.textContent = text;
    // create edit button 
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
        editTask(this) // refers to this instance of code
    });
    // create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        deleteTask(this) // refers to this instance of code
    });
    // append elements
    listEl.appendChild(taskText);
    listEl.appendChild(editBtn);
    listEl.appendChild(deleteBtn);
    todoList.appendChild(listEl);

    taskInput.value = ""; // need to clear input
    }
}
// delete task function
function deleteTask(button) {
    var listEl= button.closest("li");
    var taskText = listEl.querySelector("span").textContent
    var taskIndex = tasks.indexOf(taskText);
    if (taskIndex > -1) {
        tasks.splice (taskIndex, 1);
    }
    listEl.remove(); //this is needed to remove task from the DOM
}

// adding delete button functionality
deleteBtn.addEventListener("click", function(){
    var listEl = this.closest("li");
    var taskText = listEl.querySelector("span").textContent;

    tasks = tasks.filter( task => task !== taskText )// to keep tasks that DO NOT match the deleted one

    listEl.remove();
});

//edit task function
function editTask(button) {
    var listEl = button.closest("li");
    var taskText = listEl.querySelector("span");
    var currentText = taskText.textContent;

    var inputEl = document.createElement("input"); //creating input 
    inputEl.type = text;
    inputEl.value = currentText;

    taskText.replaceWith(inputEl); // replace with replaces tasktext with value of currentText i.e. inputEL
    
    
}
//edit task button functionality