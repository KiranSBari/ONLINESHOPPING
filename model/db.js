// database connectivity
var mysql= require('mysql');

//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3366,
    password:'',
    database:'db_onlineshopping'
});

connection.connect(function(err){
    if(err) throw err;

});
module.exports=connection;