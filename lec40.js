function factoryFunction(name){
    return {
        greet(){
            console.log(`Hello ${name}!`)
        }
    }
}

factoryFunction("Imtiaz").greet()
factoryFunction("waseem").greet()
factoryFunction("Jamal").greet()
