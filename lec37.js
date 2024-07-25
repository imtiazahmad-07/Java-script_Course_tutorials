let key = document.querySelector("#first");
let key1 = document.querySelector("#second");
let key2 = document.querySelector("#third");

key.addEventListener("keydown",()=>{
   document.getElementById("form").style.background = key.value;
})

 

key1.addEventListener("keyup",()=>{
    document.getElementById("form").style.background = key1.value;
 })

 key2.addEventListener("keypress",()=>{
    document.getElementById("form").style.background = key2.value;
 })