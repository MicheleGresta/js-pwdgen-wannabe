//const

const firstName = prompt("What's your name?");
const lastName = prompt("Whats's your surname?");
const userAge = prompt("Whats's your age?");
const userFavColor = prompt("Tell us your favourite color");
const basicNum = 21; 

const userFullName = firstName + " " + lastName
let sumAge = userAge - -21;

document.getElementById("welcome-user").innerHTML = "Welcome " + userFullName + " !"
document.getElementById("user-info").innerHTML ="Hi, your favourite color is " + userFavColor

//exercise

document.getElementById("exercise").innerHTML = "Based on your answers, the password is: " + firstName + lastName + userFavColor + basicNum
document.getElementById("exercise-2").innerHTML = "Based on your answers, the password is: " + firstName + lastName + userFavColor + sumAge

console.log(sumAge)