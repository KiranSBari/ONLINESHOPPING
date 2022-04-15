// database connectivity
var mysql= require('mysql');

//define connection configuration 

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    multipleStatements:true,
    database:'onlineshopping'

});

connection.connect(function(err){
    if(err) 
    {
        console.log("There is error to connect to DB \n"+ err)
         //throw err;
    }

});
module.exports=connection;