
let year = +prompt("Enter Your Birth Year")
let currentDate = new Date();
let age = currentDate.getFullYear() - year

alert(`You are ${age} Years Old Yeah!!`)