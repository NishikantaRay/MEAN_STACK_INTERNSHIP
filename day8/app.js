const operation = require('./oper');

const fs = require('fs');


console.log(`addition is ${operation.add(4,5)}`);

console.log(`substraction is ${operation.sub(5,4)}`);

console.log(`multiplication is ${operation.mul(22,2)}`);

console.log(`division is ${operation.div(12,2)}`);

const read=fs.readFileSync("./employee.json","utf-8");

const data=JSON.parse(read);

fs.writeFileSync("./employee.txt","hello nishikantaray");

fs.appendFileSync("./employee.txt","hello world");

const readfeed=fs.readFileSync("./employee.txt","utf-8");

console.log(read);

console.log(readfeed);

console.log(data.name);