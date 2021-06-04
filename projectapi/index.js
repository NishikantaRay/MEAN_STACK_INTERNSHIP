const dbConn = require("./config/db.conn");
const userRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const express = require('express');
const app=express();
app.use(express.json());
dbConn();
app.use('/apiauth/postauth',userRoutes);
app.use('/api/post',contactRoutes);
const port=process.env.PORT || 3000 ;


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});
