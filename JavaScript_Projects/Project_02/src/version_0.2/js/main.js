import { createTask, specifyDonedTask, deleteTask, loadTasks } from "./functions.js"

let taskList, addTaskInput, addTaskButton;
const localStorageName = "taskData", localStorageData = new Map();

taskList = document.getElementById("task-list");
addTaskInput = document.getElementById("add-task-input");
addTaskButton = document.getElementById("add-task-button");

// Gets data from local storage when pages loading
document.querySelector("body").onload = function () {

  // localStorageData.set(1, "Deneme1")
  // localStorageData.set(2, "Deneme2")
  // localStorageData.set(3, "Deneme3")

  // let objectArray = Array.from(localStorageData, ([key, value]) => ({ key, value }))
  // let jsonString = JSON.stringify(objectArray)
  // window.localStorage.setItem("taskData", jsonString)

  loadTasks(localStorageName, localStorageData, taskList);
}

// Adds event listener for new tasks
addTaskButton.addEventListener("click", (event) => {
  event.preventDefault()
  createTask(addTaskInput.value, taskList);
  addTaskInput.value = "";
});

// Adds event listener for specifing the doned tasks
let tasks = taskList.getElementsByTagName("li")
Array.from(tasks).forEach(task => task.addEventListener("click", specifyDonedTask))

// Adds event listener for delete task
Array.from(tasks).forEach(task => task.querySelector(".fa-xmark").addEventListener("click", deleteTask))

export { localStorageData }