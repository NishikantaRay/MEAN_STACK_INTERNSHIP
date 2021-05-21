// Write a Javascript program using conditional operator to find the biggest of 3 numbers

let a = prompt("Enter the number a");
let b = prompt("Enter the number b");
let c = prompt("Enter the number c");
document.write(`numbers are a= ${a} b= ${b} c= ${c} `); 
document.write("<br>");
function biggestnum(a,b,c) {
    let  big = (a > b) ? (a > c ? a : c) :(b > c ? b : c);
    console.log(`Biggest number is ${big}`);
    document.write(`Biggest number is ${big}`);
    document.write("<br>");
}
biggestnum(a,b,c);

// Write a Javascript Program to find the first 50 prime numbers

let count=1, flag, i=2, j;
document.write("<br>");
document.write("Program to find the first 50 prime numbers :"); 
document.write("<br>");
function primenumber(count,flag,i,j) {
    while(count <= 50){
        flag = 0;
        for(j=2; j <= i/2; j++){
            if(i%j==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
            console.log(i);
            document.write(i+"\t");
            count++;
        }
        i++;
    }
    document.write("<br>");
    document.write(`count the prime number ${count-1}`);
    console.log(count-1);
}
primenumber(count,flag,i,j);
document.write("<br>");

// Write a Javascript program to find the sign of the product of 3 numbers

let x = prompt("Enter the number x");
let y = prompt("Enter the number y");
let z = prompt("Enter the number z");
document.write("<br>");
document.write(`numbers are a= ${x} b= ${y} c= ${z} `); 
document.write("<br>");
function sign(x,y,z) {
    let mul = x*y*z;
    if(mul>0){
        document.write("<br>");
        document.write("Positive");
        console.log("Possitive");
    }else{
        document.write("<br>");
        document.write("negetive");
        console.log("negetive");
    }
}
sign(x,y,z);
document.write("<br>");

// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of
// three print "HTML" instead of the number and for the multiples of five print "CSS". For
// numbers which are multiples of both three and five print "JAVASCRIPT"

function interchange() {
    for (let index = 1; index <= 100; index++) {
        if(index%3==0 && index%5==0 ){
            document.write("JAVASCRIPT"+"\t");
            console.log("JAVASCRIPT");
        }else if (index%3==0) {
            document.write("HTML"+"\t");
            console.log("HTML");
        } else if(index%5==0){
            document.write("CSS"+"\t");
            console.log("CSS");
        }else{
            document.write("other"+"\t");
            console.log("other");
        }
    } 
}
interchange();