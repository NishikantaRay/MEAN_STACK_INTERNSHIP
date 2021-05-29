const dbConn = require("./config/db.conn");
const logger = require("./middleware/logger");
const postroutes = require("./routes/posts");
const express = require('express');
const app=express();
app.use(logger);
app.use(express.json());
dbConn();
app.use('/api/post',postroutes);
const port=process.env.PORT || 3000 ;


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});
