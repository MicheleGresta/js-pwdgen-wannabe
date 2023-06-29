//const

const firstName = prompt("What's your name?");
const lastName = prompt("Whats's your surname?");
const userFavColor = prompt("Tell us your favourite color");

const userFullName = firstName + " " + lastName

document.getElementById("welcome-user").innerHTML = "Welcome " + userFullName + " !"
document.getElementById("user-info").innerHTML ="Hi, your favourite color is " + userFavColor

//exercise

document.getElementById("exercise").innerHTML = firstName + lastName + userFavColor + "21"