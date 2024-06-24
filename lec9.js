//==================================     Date Methods    =============================

const date =  new Date();
// "" const newdate =  new Date('1 jan 2022'); "" ==>  we can also set the current time from our own wish
console.log(date);                    // current date and time
console.log(date.toDateString());     //Prints in string format
console.log(date.getFullYear())       //Only prints the year
console.log(date.getMonth())          //Prints only the month
console.log(date.getDate())           //It prints the date in month
console.log(date.getHours())          //Prints hours
console.log(date.getMinutes())        //Prints minutes
console.log(date.getSeconds())        //Prints seconds
console.log(date.getMilliseconds())   //Prints milliseconds
console.log(date.getTime())           //Counts time in seconds from 1970
console.log(date.getDay())            //Prints day of the week, starts from 0 = Sunday