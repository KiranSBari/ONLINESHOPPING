//custdata.js is created to handel all customer related opprations
// Imported DB Connctiond data
var sql = require('./db');                                         

// Customer Function to store data at one object
var Customer = function(cust){ 
    
    this.pk_custID=cust.pk_custID;
    this.firstName=cust.firstName;
    this.lastName=cust.lastName;
    this.email=cust.email;
    this.contactNum=cust.contactNum;
    this.location=cust.location;
};

//Code to get all data from table 
Customer.getAll = function (result) {
    sql.query("Select * from tbl_customers", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              //console.log('Customers : ', res);     //To Print table data on Console
              result(null, res);
            }
        });   
};


//Code to insert data in table 
Customer.create = function (new_Cust, result) {    
    sql.query("INSERT INTO tbl_customers set ?", new_Cust, function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res +" Data entered successfully");
              result(null, res.pk_custID);
            }
        });           
};

//Code to get data of some selected customer
Customer.getById = function (Id, result) {
  sql.query("Select * from tbl_customers where pk_custID = ? ", Id, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};

//Code to update data in table 
Customer.updateById = function(id, cust, result){
  sql.query("UPDATE tbl_customers SET firstName = ?,lastName=?,email=?,contactNum=?,location=? WHERE pk_custID = ?", [cust.firstName,cust.lastName,cust.email,cust.contactNum,cust.location, id], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
            }
    }); 
};

//Code to delete data of any customer
Customer.remove = function(id, result){
  sql.query("DELETE FROM tbl_customers WHERE pk_custID = ?", [id], function (err, res) {
              if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
              else{
                  result(null, res);
              }
          }); 
};

module.exports= Customer;