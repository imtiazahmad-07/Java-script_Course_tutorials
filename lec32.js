// Selecting with ID

var heading = document.getElementById("heading");

console.log(heading)

// Selecting with ClassName

var heading2 = document.getElementsByClassName("heading2");

console.log(heading2)

//Selecting with tagName

var tags = document.getElementsByTagName("p")[1];

console.log(tags)

// querySelector 

let firstElement = document.querySelector(".heading2")  //selecting classes
let allElements = document.querySelectorAll("p") //selecting all p tags
let element = document.querySelector("#heading") //selecting the Id


console.log(firstElement)
console.log(allElements)
console.log(element)