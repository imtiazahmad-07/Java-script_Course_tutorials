function Student (first,last,age,roll){
    this.firstName= first
    this.lastName = last
    this.age = age
    this.rollNo=roll
}

var student1 = new Student("Kumar","Sanu",25,1)
var student2 = new Student("Ali","Khan", 24,2)
console.log(student1)
console.log(student2)