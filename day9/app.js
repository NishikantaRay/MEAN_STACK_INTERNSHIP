const fs = require('fs');
const prompt = require('prompt-sync')();
var uniqid = require('uniqid');

function dataentry() {
    const noPatient = prompt("Enter no. of Patient : ");
    try{
        if(noPatient>0)
            var patientData = JSON.parse(fs.readFileSync('./master.json'));
    }catch(ENOENT){
        var patientData = [];
    }

    for(let i=0;i<noPatient;i++){
        const patientId = uniqid();
        const patientName = prompt("Enter patient's name : ");
        const patientContact = prompt("Enter patient's contact : ");
        const patientDiseaseName = prompt("Enter patient DiseaseName : ");
        const patientCritical = prompt("Enter patient's critical level : ");
        
        const patient = {
            id:patientId,
            name:patientName,
            contact:patientContact
        }

        const disease = {
            id : patientId,
            disName : patientDiseaseName,
            lvl: patientCritical
        }

        patientData.push(patient);
        try{
            var diseaseData = JSON.parse(fs.readFileSync('./dis/'+patientDiseaseName+'.json'));
            
        }catch(ENOENT){
            var diseaseData = [];
        }
        diseaseData.push(disease);
        fs.writeFileSync('./dis/'+patientDiseaseName+'.json',JSON.stringify(diseaseData));
    }
    if(noPatient>0)
        fs.writeFileSync('./master.json',JSON.stringify(patientData));
}


function searchpat() {
    const searchName = prompt("Enter patient name : ");
    var flag = 0;
    try{
        var patientData = JSON.parse(fs.readFileSync('./master.json'));
        for(let i=0;i<patientData.length;i++){
            if(patientData[i].name == searchName){
                console.log(`Patient ID : ${patientData[i].id}`);
                console.log(`Patient Name : ${patientData[i].name}`);
                var searchId= patientData[i].id;
                flag = 1;
            }
        }
    }catch(ENOENT){
        console.log("Patient file doesn't exist");
    }

    if(flag){
            fs.readdir('./dis',(err,files)=>{
                files.forEach(file=>{
                    var patData = JSON.parse(fs.readFileSync('./dis/'+file));
                    for(let i=0;i<patData.length;i++){
                        if(patData[i].id==searchId){
                            console.log(`Patient disease : ${patData[i].disName}`);
                        }
                    }
                })
            })

    }

}

function diseasedata() {
    fs.readdir('./dis',(err,files)=>{
        files.forEach(file=>{
            var patData = JSON.parse(fs.readFileSync('./dis/'+file));
            for(let i=0;i<patData.length;i++){
                console.log(patData[i]);
            }
        })
    })
}

function patientdetails() {
    var patientData = JSON.parse(fs.readFileSync('./master.json'));
    console.log(patientData);
}


    
while (true) {
    console.log("Hospital management system");
    console.log("enter 1 for entry of entity");
    console.log("enter 2 for search a patient");
    console.log("enter 3 for patient disease data");
    console.log("enter 4 for patient  data");
    console.log("enetr 0 for stop");
    let choose=prompt("Enter your choice");
    switch (choose) {
        case '1':
            dataentry();
            break;
        case '2':
            searchpat();
            break;
        case '3':
            diseasedata();
            break;
        case '4':
            patientdetails();
            break;
        case '0':
            return;    
        default:
            console.log("Enter a valid choice");
    }
    
}


