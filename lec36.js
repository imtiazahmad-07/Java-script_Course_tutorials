let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");

box1.addEventListener("click",()=>{
    alert("Box1 Clicked");
})  //It occurs on left click

box2.addEventListener("contextmenu",()=>{
    alert("Box2 Clicked")
}) ////It occurs on right click

box3.addEventListener("dblclick",()=>{
    alert("Box3 Clicked")
}) ////It occurs on double click

box4.addEventListener("mouseover",()=>{
    alert("Box4 Hovered")
}) ////It occurs on when the pointer is over the box
