{
    let a=10;   //block scope
    const b=10; //block scope
    var c=10;   //global scope cause var is not block scope key word
}
// console.log(a); => a variable cannot be accessed here
console.log(c);

function sum(){
    let a=10,b=20;  //function scope variables / local scope variable
    console.log(a+b);
}
sum();