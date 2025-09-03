
//javascript file

var http=require('http');
const url=require('url'); //url route creation
const fs=require('fs');   //file system module
    
const server=http.createServer(
    function(req,res){
        const rurl=url.parse(req.url,true).pathname; 
        if(rurl=="/home/Details"){
         console.log(rurl);
         res.write("This the home page");
         res.end();
        }
        else if(rurl=="/about"){
            res.write("Its a Kerala  based company started in 1990");
            res.end();
        }
        else if(rurl=="/"){
            res.write("error occured");
            res.end();
        }
        else if(rurl=="/login"){
            res.write("This the login page");
            res.end();
        }
        else if(rurl=="/register"){
            res.write("This the register page");
            res.end();
        }
        else if(rurl=="/admin")
        {
            res.write('Admin home page');
            res.end();
        }
        else{
            res.write("404 page not found");
            res.end();
        }

}
).listen("8080");
