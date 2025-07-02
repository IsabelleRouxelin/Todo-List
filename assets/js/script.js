//Todo List

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

//edit task function
function editTask(button) {
    var listEl = button.closest("li");
    var taskText = listEl.querySelector("span");
    var currentText = taskText.textContent;

    var inputEl = document.createElement("input"); //creating input 
    inputEl.type = "text";
    inputEl.value = currentText;

    taskText.replaceWith(inputEl); // replace with replaces tasktext with value of currentText i.e. inputEL
        inputEl.focus();

    // save edit function
    var saveEdit = function() {
        var newText = inputEl.value.trim();
        if (newText !== "" && newText !== currentText) {
            const taskIndex = tasks.indexOf(currentText);
            if (taskIndex > -1) {
                tasks[taskIndex] = newText;
            }
            taskText.textContent = newText; // Update DOM
        }
        inputEl.replaceWith(taskText);
    };
    
    // adding save functionality
    inputEl.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            saveEdit();
        }
    });
}
