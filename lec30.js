const url = "https://api.escuelajs.co/api/v1/products"

const data = async ()=>{
    let getData = await fetch (url)
    let arranged = await getData.json()
    console.log(arranged[9].title)
}

console.log(data())