class Employee{
    Name;
    ID;
    Department;
    Designation;
    Salary;
    Birth ;
    Joining ;

    constructor(n,i,dp,dn,s,b,j)
    {
        this.Name=n;
        this.ID=i;
        this.Department=dp;
        this.Designation=dn;
        this.Salary=s;
        this.Birth=b;
        this.Joining=j;
    }
    set basicsalary(sal){
        this.Salary = sal;}
   monthlysalary()
   {
       let ms=0;
       let ts=0;

       if(this.Salary>500000)
       {
           ts=(this.Salary*0.05)/12;
        }
        if(this.Salary>750000)
       {
           ts=(this.Salary*0.075)/12;
        }
        if(this.Salary>1000000)
        {
            ts=(this.Salary*0.1)/12;
        }
        if(this.Salary>1500000)
        {
            ts=(this.Salary*0.2)/12;
        }
        ms=this.Salary/12 - ts;
        ms=ms + ms*0.1;
        if(2021-this.Joining>=10)
        {ms=ms+500;}
        ms=ms+ (this.Salary*0.15)/12;
        console.log('Monthly Salary is :-'+ms);
        }
        currentage()
        {
            console.log(`current age:-${2021-this.Birth}`);
        }
      
}

let form = document.querySelector("#ex-form");
var n,id,option,dept,desg,sal,birth,join;
form.addEventListener('submit',(event)=>{
    n =document.getElementById("Input1").value;
    // console.log(n);
    id =document.getElementById("Input2").value;
    // console.log(id);
    dept = document.getElementById("Input3").value;
    // console.log(dept);
    sal =document.getElementById("Input4").value;
    // console.log(sal);
    birth =document.getElementById("input5").value;
    // console.log(birth);
    option =document.getElementById("optionsel").value;
    // console.log(option);
    join =document.getElementById("input6").value;
    // console.log(join);
    const Emp = new Employee(n,id,dept,option,sal,birth,join);
    Emp.currentage();
    Emp.monthlysalary();
    if(n == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your name";
    }
    if(id == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your Dept";
    }
    if(dept == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your ID";
    }
    if(sal == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your Salary";
    }
    if(birth == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your Birth year";
    }
    if(option == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your  Designation";
    }
    if(join == ''){
        document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Please enter your joining year";
    }
    console.log(`Employee details:-NAME-${n}ID-${dept}DEPT-${id}SALARY${sal}BIRTHYEAR-${birth}DESG-${option}JOINING YEAR${join}`);
    event.preventDefault();
})

