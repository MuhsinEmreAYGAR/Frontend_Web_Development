const taskDOM = document.getElementById("task");
const liveToastBtnDOM = document.getElementById("liveToastBtn");
const listDOM = document.getElementById("list");
const toastLiveSucces = document.getElementById("liveToastSuccess");
const toastLiveError = document.getElementById("liveToastError");
const listItems = listDOM.children;

let ler = [
    {name:"Ahmet",surname:"Yılmaz"},
    {name:"Mehmet",surname:"Yılmaz1"}
];

localStorage.setItem("tasks",JSON.stringify(ler));
const tasks = JSON.parse(localStorage.getItem("tasks"));

console.log(typeof tasks[0]);


for (let i = 0; i < listItems.length; i++) {
    let timesSign = document.createElement("a");
    timesSign.style = "position:absolute; top:2px; right:5px";
    timesSign.className = "removeBtn"
    timesSign.innerHTML = '<i class="fa-solid fa-xmark fa-lg"></i>';
    listItems[i].appendChild(timesSign);
}


listDOM.addEventListener("click", removeTask);
listDOM.addEventListener("click", taskDone);



function newElement() {
    let newLiElement = document.createElement("li");

    if (taskDOM.value.trim() === "") {
        showToast(toastLiveError);
        taskDOM.value = "";
    } else {
        showToast(toastLiveSucces);
        newLiElement.textContent = taskDOM.value;
        listDOM.appendChild(newLiElement);
        taskDOM.value = "";
    }
}

function removeTask(e) {

    if (e.target.parentElement.className === "removeBtn") {
        if (confirm("Görevi silmek istediğinize emin misiniz ?"))
            e.target.parentElement.parentElement.remove();
    }
}


function taskDone(e) {
    
    if (e.target.parentElement.className != "removeBtn") {

        
        e.target.style = "background-color:#1251c3; color:#FFFFFF;text-decoration-line:line-through; border-bottom:solid 2px #FFFFFF;";
        e.target.querySelector("a").style.color = "#FFFFFF";
        e.target.innerHTML = '<i class="fa-solid fa-check" style="margin-right:10px;"></i>'+ e.target.innerHTML;
        isTaskDone = true;
        
    }
}


function showToast(t) {
    const toast = new bootstrap.Toast(t)
    toast.show();
}