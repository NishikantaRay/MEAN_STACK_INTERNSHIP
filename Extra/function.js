// function add(a,b){
    
    
//    return a+b;
    
// }

// let add = function(a,b){
//    return a+b;
// }

//let add = (a,b) => a+b 

// let add = (a,b)=>{
//    return a+b;
// }

//let square = a => a*a;

//let printname = ()=>console.log(`Hello! Anupam`)


// let add = (a,b)=>{
//    return a+b;
// }

let add = (a,b)=>{
   console.log(a+b);
   return a+b
}
// function printafter3seconds(){
//    console.log(`Hello from callback!`)
// }
setTimeout(function(){
   console.log(`Hello from callback!`)
},3000);
let square = a => a*a;

let printname= ()=>console.log(`Hello! Anupam`)









sum =add(10,20);

printname()

let squareofnumber = square(12);
console.log(squareofnumber);
console.log(`Average of 2 numbers is ${sum/2}`);
add(2.4,4.5);
add("Anupam","Roy");