function getData(dataId){
    return new Promise((resolve,rejcet)=>{
        setTimeout(()=>{
            console.log("Data",dataId)
            resolve("Resolve")
        },2000)
    })
}

getData(1).then((res)=>{
    console.log(res)
    getData(2).then(()=>{
        console.log(res)
        getData(3).then(()=>{
            console.log(res)
        })
    })
})