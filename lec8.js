//============================  String methods  ===========================

let language ="Java Script";
let language2 ="       Python      ";
let industry="Tech industry";

console.log(language.length);                   //Checks the length
console.log(language.toUpperCase());            //Convert all letters to uppercase
console.log(language.toLowerCase());            //Convert all letters to lowercase
console.log(language.slice(4));                 //prints from 4 to 10 (0 to 3 not included)
console.log(language.replace("Java","Type"));   //Replaces Java and prints Type
console.log(language.concat(" is popular language in ",industry));  //It concatenates two strings 
console.log(language2.trim(),"is a second popular scripting language")      //This diminishes the spaces in variable