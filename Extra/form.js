let form = document.querySelector("#ex-form");

form.addEventListener('submit',(event)=>{
     let fullname = document.getElementById('fullname').value;

     if(fullname == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your name";
     }
     let course = document.getElementById('course').value;
     
     let radios =document.getElementsByName('course_type');
     let courseType =""; 
     for(let i=0;i<radios.length;i++){
         if(radios[i].checked){
            courseType=radios[i].value;
         }
     }

     let iagree ="" 
     
     if(document.getElementById('agree').checked)
        iagree = document.getElementById('agree').value;


    console.log(`${fullname} ${course} ${courseType} ${iagree}`)
    event.preventDefault();
})