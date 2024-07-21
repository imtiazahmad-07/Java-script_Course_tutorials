/////////////// DOM concepts    //////////////////////////////

var element,element1,element2,element3,nextElement;
element = document.getElementById("google-link").innerText;
nextElement = document.getElementById("para1").innerHTML;
element1 = document.getElementById("text").getAttribute("height");
element2 = document.getElementById("text").getAttributeNode("style");
element3 = document.getElementById("text").attributes[2].value;


console.log(element);
console.log(element1);
console.log(element2);
console.log(element3)

console.log(nextElement);