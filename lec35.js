let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")

btn1.addEventListener("dblclick",()=>{
    document.write("Registererd Successfully")
})

btn2.addEventListener("click",() =>{
    console.log("Handler-1")
})

const button = ()=>{
    console.warn("Handler-2")
}

btn2.removeEventListener("click", button)


