//node js login server

var http=require('http');
const url=require('url'); //url route creation
const fs=require('fs');   //file system module
    
const server=http.createServer(
    function(req,res){
        const rurl=url.parse(req.url,true).pathname;
        if(rurl=="/admin"){
            fs.readFile('index.html',function(err,data){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);

            });
        }
        else if(rurl=="/login"){
            fs.readFile('Login.html',function(err,data){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            });
        }
    }
       


).listen("8080");
            
