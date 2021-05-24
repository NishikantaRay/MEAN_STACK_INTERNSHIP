var ename,eamount,edate;
let form = document.querySelector("#ex-form");

function getInputVal(id){
    return document.getElementById(id).value;
}  

let valid =1;
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    ename = getInputVal("Input1");
    
    if (ename=='') {
        document.getElementById('err').classList.remove('d-none');
        document.getElementById('err').innerText="Please enter a valid name";        
        valid=0;
    }else if(!/^[a-z\d]{5,12}$/i.test(ename)){
        document.getElementById('err').classList.remove('d-none');
        document.getElementById('err').innerText="Please enter a valid name";        
        valid=0;
    }
    
    eamount = getInputVal("Input2");

    if (eamount=='') {
        document.getElementById('err').classList.remove('d-none');
        document.getElementById('err').innerText="Please enter a valid amount";
        valid=0;
    }else if(!/^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/.test(eamount)){
        document.getElementById('err').classList.remove('d-none');
        document.getElementById('err').innerText="Please enter a valid amount";        
        valid=0;
    }
    
    edate = getInputVal("input3");
    if (edate=='') {
        document.getElementById('err').classList.remove('d-none');
        document.getElementById('err').innerText="Please enter a valid date";
        valid=0;
    }
    

    if (valid==1) {
        console.log(`NAME---${ename}AMOUNT---${eamount}DATE---${edate}`);
        const bo_dy = document.createElement('tr');
        bo_dy.class="table";
        bo_dy.innerHTML =`
        <td>${ename}</td>
        <td>${eamount}</td>
        <td>${edate}</td>`
        document.getElementById("tb").appendChild(bo_dy);   
    }
})
