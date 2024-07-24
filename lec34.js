let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let myDiv = document.querySelector("#my-div")

let button1 = btn1.onclick = () =>{
    let date = new Date()
    year = date.getFullYear()
    return year;
    // console.log(year)
}

let button2 = btn2.ondblclick= () =>
{
    let date = new Date()
    month = date.getMonth()
    return month;
    // console.log("Month goes is : " + month)
}

let button3 = btn3.ondblclick= () =>
    {
        let date = new Date()
        day = date.getDate()
        return day;
        // console.log("Month goes is : " + month)
    }

myDiv.onmouseover = () =>{
    document.write("Date : "+ button3() + " " + button2() + " " + button1())
}
