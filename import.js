// modules are being imported from one file to the other file

// module.js
function hello(){
    console.log("Hello World");
}
module.exports=hello;

 // server.js
var hello=require("./modules");
hello();

//by running this file its clear that th file contents in module.js is imported to server.js
