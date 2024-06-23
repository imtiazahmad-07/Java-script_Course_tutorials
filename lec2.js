var firstname = "ali"; //declaring variable with var keyword
var firstname = "Imtiaz";   //declaring again same variable name and it would run
document.write("My name is : ", firstname);
let friendname = "haroon";
friendname ="waseem";   //can't declare the same variable because let is a block scoped variable and it'll give error
document.write("<br>My friend's name is : ", friendname);
const idNum= "1234";   //It can't be again either declared and changed once it is initialized 
document.write("<br>My ID num is : ", idNum);