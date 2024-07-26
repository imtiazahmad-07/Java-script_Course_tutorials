
let newElement = document.createElement("p");                   //creates a tag
let newText = document.createTextNode("This is a Paragraph text");        //creates text
let newComment = document.createComment("This is a comment");   //creates comment

newElement.appendChild(newText)    //text appends in the above tag
document.querySelector("#test").appendChild(newElement) //it puts the newElement in THe div which appends in the last


var target = document.querySelector("#test");
target.insertBefore(newElement,target.childNodes[0]) //it appends the element before the  0th index child



