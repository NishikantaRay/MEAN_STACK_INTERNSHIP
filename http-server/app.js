const fs= require('fs');

const http=require('http');

const server =http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("hello world");
    }else if(req.url=='/about'){
        res.end("about page");
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("404 page not found");
    }
});

server.listen(3000,()=>{
    console.log("port listen on 3000");
});