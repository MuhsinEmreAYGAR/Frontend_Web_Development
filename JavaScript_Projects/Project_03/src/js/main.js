import foodData from "./app.js"

const createListItem = function (element) {

    let listItem = document.createElement("li")

    listItem.setAttribute("id", element.id)
    listItem.classList.add("col-lg-6")

    listItem.innerHTML = `
    <div class='row'>

        <!-- İmage Part -->
        <div class="col-4">
          <img
            src='${element.img}'
            alt='food-image' class='food-image'>
        </div>

        <!-- Text Part -->
        <div class='col-8'>
          <div class="menu-content">
            <div class='menu-title'>
              <h4 class='food-name'>${element.title}</h4>
              <h4 class='food-price'>$${element.price}</h4>
            </div>

            <div class='menu-desc'>${element.desc}</div>
          </div>
        </div>

    </div>`

    document.getElementById("food-list").appendChild(listItem)
}

document.getElementsByTagName("body").onload = foodData.forEach(createListItem);;

const showData = function (category) {
    foodData.forEach((data) => document.getElementById(data.id).style.display = category.includes(data.category) ? "block" : "none")
}

const showActivePage = function (event) {
    for (let button of document.getElementsByTagName("button"))
        button.classList.remove("current-button")

    event.target.classList.add("current-button")
}

document.getElementById("select-all").onclick = (event) => {
    showData(["Korea", "Japan", "China"])
    showActivePage(event)
}

document.getElementById("select-korea").onclick = (event) => {
    showData(["Korea"])
    showActivePage(event)
}

document.getElementById("select-japan").onclick = (event) => {
    showData(["Japan"])
    showActivePage(event)
}

document.getElementById("select-china").onclick = (event) => {
    showData(["China"])
    showActivePage(event)
}
