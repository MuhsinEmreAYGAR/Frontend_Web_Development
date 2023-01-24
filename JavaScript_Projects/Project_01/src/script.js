const userName = document.getElementById("name");
const currentDay = document.getElementById("day");
const currentHours = document.getElementById("hour");
const currentMinutes = document.getElementById("minute");
const currentSeconds = document.getElementById("second");
const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

userName.textContent = prompt("İsminizi giriniz").toUpperCase();

function showtime() {
    let currentTime = new Date();
    setTimeout(showtime,1000);

    setDay(currentTime.getDay());
    currentHours.textContent = currentTime.getHours();
    
    currentMinutes.textContent = currentTime.getMinutes();
    if(currentTime.getMinutes()<10) {
        currentMinutes.textContent = "0"+currentTime.getMinutes();
    }
    
    currentSeconds.textContent = currentTime.getSeconds();
    if(currentTime.getSeconds()<10) {
        currentSeconds.textContent = "0"+currentTime.getSeconds();
    } 
}

showtime();

function setDay(index) {
    currentDay.textContent = days[index];
}