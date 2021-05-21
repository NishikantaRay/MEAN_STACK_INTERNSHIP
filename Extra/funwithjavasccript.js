let divs  = document.getElementsByTagName('div');
console.log(divs)

for(let i=0;i<divs.length;i++){
    console.log(divs[i].innerText);
}

let firstDiv = document.getElementById('first_div');

console.log(firstDiv.innerText)

let accessByClass=document.getElementsByClassName('div_example')
console.log(accessByClass[0].innerText)

let accessbyQuerySelector = document.querySelectorAll('.div_example');
console.log(accessbyQuerySelector)

document.querySelector("#btn-create").addEventListener('click',function(){
    let h2 = document.createElement('h2');
    h2.innerText = "New H2 Tag";
    document.querySelector("#newhtml").appendChild(h2)
})
    
