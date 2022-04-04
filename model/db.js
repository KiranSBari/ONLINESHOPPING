// database connectivity
var mysql= require('mysql');

//define connection configuration 

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3366,
    password:'password',
    database:'onlineshopping'
});

connection.connect(function(err){
    if(err) 
    {
        console.log("There is error to connect to DB \n"+err)
       // logError(err)
        //throw err;
    }

});
module.exports=connection;