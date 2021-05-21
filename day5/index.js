// To check whether a given no. is perfect or not

// var n = prompt(`enter the no. to be checked`);
// document.write("<br>")
// console.log(`Entered no. is: ${n}`)
// document.write(`Entered no. is: ${n}`)
// document.write("<br>")
// var sum = 0;
// let perfect = (n) => {
//     for (var i = 1; i < n; i++) {
//         if (n % i == 0) {
//             sum = sum + i;
//         }
//     }
//     if (sum == n) {
//         console.log(`${n} is a perfect no.`);
//         document.write(`${n} is a perfect no.`);
//     } else {
//         console.log(`${n} is not a perfect no.`);
//         document.write(`${n} is not a perfect no.`);
//     }
// }
// perfect(n);

// array prob

// var array = [];
// var i=0;
// function input() {
//     while(true){
//         var x =prompt(" Enter the values "+ (i+1)+" (q for stop)")
//         if (x==="q") {
//           break;    
//         }
//         i++;
//         array.push(x);
//     }
// }
// input();
// console.log(array);
// function check(arr){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]=="")   
//            return false;
//     }
//     return true;
// }
// check(array);

// array.forEach(element => {
//     if (check(array)) {
//         console.log(element); 
//     } else {
//         console.log("Nothing Available to print");
//     }
    
// });

var array = [];
var i=0;
function input() {
    while(true){
        var x =prompt(" Enter the values "+ (i+1)+" (q for stop)")
        if (x==="q") {
          break;    
        }
        i++;
        array.push(x);
    }
}
input();
console.log(array);
function check(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="ironman"&&arr[i]=="captainamerica"&&arr[i]=="hulk"&&arr[i]=="Thor")   
           return 1;
        else if(arr[i]=="ironman"&&arr[i]=="captain america"&&arr[i]=="hulk")
            return 2;
        else if(arr[i]=="ironman"&&arr[i]=="captain america")
            return 3;
        else if(arr[i]=="ironman")
            return 4;
        else if(arr[i]=="")
            return 5;               
    }
}
check(array);


    if (check(array)==1) {
        console.log("ironman captain america and others"); 
    }else if(check(array)==2) {
        console.log("ironman captain america hulk");
    }else if(check(array)==3){
        console.log("ironman captain america");
    }else if(check(array)==4){
        console.log("ironman");
    }else {
        console.log("Nothing Available to print");
    }
// var array = [];
// var size = prompt("enter the size"); 
// let c=0;
// for(var i=0; i<size; i++) 
// {
// 	array[i] = prompt('Enter the names ' + (i+1));
// }
// console.log(array);
// if(size==0)
// console.log(`nothing in array to print`);
// else{
//     for(var j=0;j<array.length;j++)
//     {
//         if(array[j]=='ironman')
//         c++;
//         else if(array[j]=='captain america')
//         c++;
//         else if(array[j]=='hulk')
//         c++;
//         else if (array[j]=='thor')
//         c++;
//     }
//     if(c==1){
//     console.log(`ironman`);
//     }
//     else if(c==2){
//     console.log(`ironman and captain america`)
//     }
//     else if(c==3){
//     console.log(`ironman captain america and hulk`)
//     }
//     else{ 
//     console.log(`ironman captain america and others`)
//     }
// }

var obj={
    firstname:"nishi",
    lastnamw:"ray",
    phone:8318318,
    fullname:function() {
        return "hello";
    }
};

console.log(obj);
console.log(obj.firstname);
console.log(obj.fullname());
var main =()=>{
    var arr = [];
    var size = 5;
    for(var i=0; i<size; i++) {
        arr[i] = prompt('Enter Element ' + (i+1));
    }
    console.log(arr);
    if(arr[0]=='ironman')
    {
        document.write(arr[0]);
    }else if(arr[0]=='ironman' && arr[1]=='captain america'){
        document.write(arr[0]+' and '+arr[1]);
    }else if(arr[0]=='ironman' && arr[1]=='captain america' && arr[2]=='hulk'){
        document.write(arr[0]+' , '+arr[1]+' and '+arr[2]);
    }else if(arr[0]=='ironman' && arr[1]=='captain america' && arr[2]=='hulk' && arr[3]=='thor'){
        document.write(arr[0]+' , '+arr[1]+' and others');
    }else{
        document.write("Nothing Available to print");
        console.log("Nothing Available to print");
    }
};
main();

