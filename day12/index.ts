console.log("hello world");
let tyname:string="nishi";
console.log(tyname);
let tynum:number=3414;
console.log(tynum);

function ty(name:string):string {
    return `dffww${name}`;
    
}
console.log(ty("nishi"));

type user={
    name:string,
    roll:number,
    class:string
}

const users:user[]=[ {
    name:"nishi",
    roll:232,
    class:"wqdqr"
},
{
    name:"nishi",
    roll:232,
    class:"wqdqr"
}];


console.log(users);

function tyinf<T>(name:T) {
    return `dffww${name}`;
    
}
console.log(tyinf(2525));

let nameinf:string|number="nishi";

console.log(nameinf);

class myname {
    NAME:string
    lass:string
    constructor(NAME:string,lass:string) {
        this.NAME=NAME;
        this.lass=lass;
        console.log(this.NAME+this.lass);
    }
}
const nameof=new myname("nishi","jbfdqwd");
