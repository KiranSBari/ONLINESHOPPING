const express = require('express');
var path=require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var routes = require('./router/router'); //importing route
routes(app); //register the route

var onListen=function(){
  console.log("Lets Again Start ")
}
// app.listen(3366,function(err){
//   if (err) 
//   console.error("Error in server setup \n", err);
//   //console.log("🌍 Server is listening on port 3000");
// });

app.listen(3366).on('error', console.log("Error to start server"));