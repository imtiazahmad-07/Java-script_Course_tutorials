setTimeout(()=>{
    console.log("please wait....");

},2000)

try{
    console.log(goOn)           //it's an error
}
catch(error){
    console.log(error)
}
setTimeout(()=>{
    console.log("please wait....");
},3000)
