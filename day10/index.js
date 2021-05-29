const express = require('express');
const fs=require('fs');
const app=express();

const port=process.env.PORT || 3000 ;
app.use(express.json());

var studentData=[];
app.get('/', function (req, res) {
    if(fs.existsSync('./student.json')){
        const studentBuffer=fs.readFileSync('./student.json');
        if(studentBuffer.length !=0){
            studentData=JSON.parse(studentBuffer)
            res.status(200).json({
                message:"Data fetched successfully" ,
                posts:studentData
            })
        } else{
            res.status(404).json({
                message:"No data found" })
        }
    } else{
        res.status(404).json({
            message:"No data found" })
    }
})


app.post("/save",(req,res)=>{
    console.log(req.body);
   
    var studentsData=[];
    if(fs.existsSync('./student.json')){
        const studentsBuffer=fs.readFileSync('./student.json');
        if(studentsBuffer.length!=0){
            studentsData=JSON.parse(studentsBuffer);
            const student = {
                studentId : req.body.sid,
                studentName : req.body.sname,
                studentEmail : req.body.semail,
                studentClass :req.body.sclass,
                studentDepart :req.body.sdept
            }

            studentsData.push(student);

            fs.writeFileSync('./student.json',JSON.stringify(studentsData));
            res.status(201).json({
                message:"Post created successfully" 
            })
        } else{
            const student = {
                studentId : req.body.sid,
                studentName : req.body.sname,
                studentEmail : req.body.semail,
                studentClass :req.body.sclass,
                studentDepart :req.body.sdept
            }

            studentsData.push(student);

            fs.writeFileSync('./student.json',JSON.stringify(studentsData));
            res.status(201).json({
                message:"Post created successfully" 
            })
        }
    } else{
        const student = {
            studentId : req.body.sid,
            studentName : req.body.sname,
            studentEmail : req.body.semail,
            studentClass :req.body.sclass,
            studentDepart :req.body.sdept
        }

        studentsData.push(student);

        fs.writeFileSync('./student.json',JSON.stringify(studentsData));
        res.status(201).json({
            message:"Post created successfully" 
        })
    }
})

app.put("/update/:studentId",(req,res)=>{
    const id = req.params.studentId;
    const studentobj ={
        studentId : req.body.sid,
        studentName : req.body.sname,
        studentEmail : req.body.semail,
        studentClass :req.body.sclass,
        studentDepart :req.body.sdept
    }
    var filteredstudentarray=[];
    if(fs.existsSync('./student.json')){
        const studentsdata = fs.readFileSync('./student.json');
        if(studentsdata.length !=0){
            const studentsobj = JSON.parse(studentsdata);
            filteredstudentarray = studentsobj.filter((student) =>student.studentId!=id);
            if(studentsobj.length ===filteredstudentarray.length){
                res.status(400).json({
                    message:"id not found"
                })
            }else{
                filteredstudentarray.push(studentobj);
                fs.writeFileSync('./student.json',JSON.stringify( filteredstudentarray));
                res.status(200).json({
                    message:"updated successfully"
                })
            }
        }else{
            res.status(400).json({
                message:"data not found"
            })
        }

    }else{
        res.status(400).json({
            message:"data not found"
        })
    }
})

app.delete('/delete/:studentId',(req, res)=>{
    const id = req.params.studentId;
    const studata = fs.readFileSync('./student.json');
    if (studata.length!=0) {
        const studentDeleteData = JSON.parse(studata);
        const filteredstudentarrays = studentDeleteData.filter((student) =>student.studentId!=id);
        if (filteredstudentarrays.length===studentDeleteData.length) {
            res.status(400).json({
                message:"id not found"
            })
        }else{
            fs.writeFileSync('./student.json',JSON.stringify(filteredstudentarrays));
            res.status(200).json({
                "message":"Deleted successfully"
            })
        }
    } else {
        res.status(400).json({
            message:"data not found"
        })
    }
})


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});
