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
    if(err) throw err;

});
module.exports=connection;