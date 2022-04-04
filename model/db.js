// database connectivity
var mysql= require('mysql');

//define connection configuration 

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
<<<<<<< HEAD
    database:'db_onlineshopping',
    multipleStatements:true
=======
    database:'onlineshopping'
>>>>>>> d7913b24e7aa5ea77f07c3b5d401fbd6edb503e1
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