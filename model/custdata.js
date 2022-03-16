var sql = require('./db');

var Customer = function(cust){
    
    this.pk_custID=cust.pk_custID;
    this.firstName=cust.firstName;
    this.lastName=cust.lastName;
    this.email=cust.email;
    this.contactNum=cust.contactNum;
    this.location=cust.location;
};

Customer.getAll = function (result) {
    sql.query("Select * from tbl_customers", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('Customers : ', res);  
              result(null, res);
            }
        });   
};



Customer.create = function (new_Cust, result) {    
    sql.query("INSERT INTO tbl_customers set ?", new_Cust, function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res.pk_custID+" Data entered successfully");
              result(null, res.pk_custID);
            }
        });           
};
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