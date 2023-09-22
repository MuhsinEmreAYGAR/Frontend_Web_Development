import { showToast } from "./toast.js";
import { localStorageData } from "./main.js";

let startId

// Function to add a new task
const createTask = function (task, taskList, taskID = startId) {

  if (isTaskValid(task)) {

    let li = document.createElement("li");
    let checkIcon = document.createElement("i");
    let crossIcon = document.createElement("i");
    let content = document.createTextNode(task);

    li.setAttribute("id", taskID);

    li.classList.add("m-2");
    checkIcon.classList.add("fa-solid", "fa-check", "fs-1");
    crossIcon.classList.add("fa-solid", "fa-xmark");

    li.appendChild(checkIcon);
    li.appendChild(crossIcon);
    li.appendChild(content);

    taskList.appendChild(li);

    localStorageData.set(taskID++, task)
    showToast("Listeye Eklendi!", "text-light", "bg-success")

    startId = taskID
    changeLocalStorage()

    li.addEventListener("click", specifyDonedTask)
    crossIcon.addEventListener("click", deleteTask)

  } else {
    showToast("Listeye boş ekleme yapamazsınız!", "text-light", "bg-danger")
  }
}

// Function to control the the input is valid
const isTaskValid = function (task) {
  return (task.trim() === "") ? false : true
}

// Function to add done task class to doned task
const specifyDonedTask = function (event) {

  if (!event.target.classList.contains("fa-solid")) {
    let checkIcon = event.target.querySelector("i");

    if (!event.target.className.includes("done-task")) {
      event.target.classList.add("done-task");
      checkIcon.style.display = "inline";
    } else {
      event.target.classList.remove("done-task");
      checkIcon.style.display = "none";
    }
  }
}

// Function to delete tasks
const deleteTask = function (event) {
  if (confirm("Bu görevi silmek istediğinize emin misiniz?")) {
    event.target.parentNode.remove();
    (localStorageData.delete(parseInt(event.target.parentNode.id)))
      ? showToast("Görev başarıyla silindi!", "text-dark", "bg-info")
      : showToast("Görev silinemedi!", "text-light", "bg-danger")

    changeLocalStorage()
  }
}

const loadTasks = function (localStorageName, localStorageData, taskList) {
  // json string > array > map
  let takenData = JSON.parse(localStorage.getItem(localStorageName) || "[]");

  // Convert to map
  for (let data of takenData) {
    localStorageData.set(data.key, data.value)
  }

  startId = localStorage.getItem("startId") || 0;

  if (localStorageData) {
    for (let data of localStorageData) {
      createTask(data[1], taskList, data[0]);
    }
  }
}

const changeLocalStorage = function () {
  window.localStorage.setItem("startId", startId)

  let objectArray = Array.from(localStorageData, ([key, value]) => ({ key, value }))
  let jsonString = JSON.stringify(objectArray)
  window.localStorage.setItem("taskData", jsonString)
}

export { createTask, specifyDonedTask, deleteTask, loadTasks };
