const user =  new Object(); // Object with new Keyword

 // Object Literal

user.name = "Anupam"
user.email = "anupam@gmail.com"
user.sayHello = ()=>{
    console.log(`Hello from ${this.name}`)
}

const anotheruser = {
    name:"John",
    email:"john@gmail.com",
    sayHello(){
        console.log(`Hello from ${this.name}`)
    },

    changeName(nm){
        this.name =nm;
    }
}


anotheruser.name = "Jane"

anotheruser.changeName("Joe")


console.log(anotheruser)

user.sayHello()
