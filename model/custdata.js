//custdata.js is created to handel all customer related opprations
// Imported DB Connctiond data
var sql = require('./db');                                         

// Customer Function to store data at one object
var Customer = function(cust){ 
    
    this.custID=cust.custID;
    this.firstName=cust.firstName;
    this.lastName=cust.lastName;
    this.email=cust.email;
    this.contactNum=cust.contactNum;
    this.location=cust.location;
};

//Code to get all data from table 
Customer.getAll = function (result) {
 // try{
    sql.query("CALL get_all_customers();", function (err, res) {
            if(err) {
            // console.log("error: ", err);
            //throw err;
              result(null, err);
            }
            else{ 
              //console.log('Customers : ', res);     //To Print table data on Console
              result(null, res);
            }
        });   
  //    }
  // catch(e ){
  //   if (e instanceof Errors.ER_NO_SUCH_TABLE)
  //   console.log("Table Not Found \n");
   
  // }
};


// Customer.getAll = function (result) {
//   try{
//     var res=sql.query("Select * from customers;");  
//     result(null,res) ;
//       }
//   catch(e){
//     console.log("Error in fatching data"+ e);

//   }
// };



//Code to insert data in table 
Customer.create = function (new_Cust, result) {    
    sql.query("CALL insert_cust(?,?,?,?,?,?)", [new_Cust.custID,new_Cust.firstName,new_Cust.lastName,new_Cust.email,new_Cust.contactNum,new_Cust.location], function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
             // console.log(JSON.stringify(res.firstName) +" Data entered successfully");
              result(null, res);
            }
        });        
        console.log("in dal")   ;
};

//Code to get data of some selected customer
Customer.getById = function (Id, result) {
  sql.query("CALL get_cust_byid(?);", Id, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            return(err);
          }
          else{
            return(res);     
          }
      });   
};

//Code to update data in table 
Customer.updateById = function(id, cust, result){
  sql.query("CALL update_cust(?,?,?,?,?,?);", [cust.firstName,cust.lastName,cust.email,cust.contactNum,cust.location, id], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
            console.log("output: ", res);
             result(null, res);
            }
    }); 
};

//Code to delete data of any customer
Customer.remove = function(id, result){
  sql.query("CALL delete_cust(?);", [id], function (err, res) {
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