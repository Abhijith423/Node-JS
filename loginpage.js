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
            

    // Html file format

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <div>
    <h1 style="text-align: center; color:black">Login Page</h1>
    <input type="text" name="username" placeholder="username" style="text-align: center;">
    <br>
    <br>
    <input style="text-align: center;" type="text" name="password" placeholder="password">
    <br>
    <br>
    <a href="./admin">
    <button style="text-align: center; color:blue" type="submit"> Login here</button>
    <a></a>
    </div>
</body>
</html>
    



            
