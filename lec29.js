function getData(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data",dataId)
            resolve("success")
        }, 2000);
    })
}

(async function (){
    console.log("Getting data 1....")
    await getData(1);
    console.log("Getting data 2....")
    await getData(2);
    console.log("Getting data 3....")
    await getData(3);
    console.log("Getting data 4....")
    await getData(4);
})();