const arr = ["Anupam",1,3,5,6.5,true,"Ram",false];


const arr1 = new Array("Anupam",1,3,5,6.5,true,"Ram",false);

console.log(arr.length) // No of elments in the array

arr.push(30)

console.log(arr)

arr.pop()

console.log(arr)

arr.unshift(40)

console.log(arr)

arr.shift()

console.log(arr);

arr.splice(1,2);

console.log(arr)

for(let i=0;i<arr.length;i++){
   // console.log(i)
    
}


let arr2 = [2,4,5,6,7,8,9,10]



arr.forEach((currentitem,ind)=>{
    console.log(ind)    
    console.log(`${currentitem*currentitem}`);

  }
)

let arr3 = []

arr2.forEach(item=>arr3.push(item*item))

let arr4 = arr2.map(item=>item*item)


console.log(arr4)

let arr5 = arr2.filter(item=> item%3 == 0 && item%2==0)

console.log(arr5)











/* 1. push
   2. pop
   3. shift
   4. unshift
   5. splice
   6. forEach
   7. map
   8. filter
*/

