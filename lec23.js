
const studentInfo = new Map([           // map is used as alternative of object with the best version of it 
    ['name','Ali Khan'],
    ['rollNo',1],
    [true, 'present'],
])
studentInfo.set(18 , "Adult")       //it sets another key:value to the map
console.log(studentInfo.get(true)) ////gets the boolean object
console.log(studentInfo.get(18)) //gets the integer object