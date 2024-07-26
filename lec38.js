function addLanguage(langName){
    const li = document.createElement("li")
    li.innerHTML = `${langName}`
    document.querySelector(".language").appendChild(li)
}

addLanguage("Python")
addLanguage("TypeScript")
addLanguage("Kotlin")
