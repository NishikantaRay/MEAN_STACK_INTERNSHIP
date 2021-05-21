class Student{
    #studentName
    studentEmail
    studentClass
    studentDepartment
    studentBirthYear

    constructor(sname,semail,sclass,sdepratment,sbyear){
        this.#studentName = sname;
        this.studentEmail=semail;
        this.studentClass=sclass;
        this.studentDepartment=sdepratment;
        this.studentBirthYear = sbyear;
    }

    set StudentName(sname){
        this.#studentName = sname;
    }

    set sName(sn){
        this.#studentName = sn;
    }

    getStudentName(){
        return this.#studentName;
    }

    get fullName(){
        return this.#studentName;
    }

}   


const student = new Student("John","john@email.com","I-SEM","CSE","1999");
console.log(student)
student.StudentName="Jane"
//student.studentName="Joe"
// student.sName = "Joy"
console.log(`Student Name:${student.fullName}`)