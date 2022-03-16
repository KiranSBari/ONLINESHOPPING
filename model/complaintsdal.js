'user strict';
var sql = require('./db');

var Complaints = function(complaints){
    this.pk_compID = complaints.pk_compID;
    this.custID = complaints.custID;
    this.compType=complaints.compType;
    this.date = complaints.date;
    this.status = complaints.status;
    
  //  this.created_at = new Date();
};


Complaints.createComplaints = function (newComplaints, result) {    
  sql.query("INSERT INTO db_onlineshopping.tbl_complains set ?", newComplaints, function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            console.log(res.insertId);
            result(null, res.insertId);
          }
      });           
};


Complaints.getComplaintsById = function (complaintsId, result) {
        sql.query("Select * from tbl_complains where id = ? ", complaintsId, function (err, res) {                 
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Complaints.getAllComplaints = function (result) {
        sql.query("Select * from tbl_complains", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('complaints : ', res);  
                  result(null, res);
                }
            });   
};

Complaints.updateById = function(id, complaints, result){
  sql.query("UPDATE `db_onlineshopping`.`tbl_complains` SET `custID` =?,`compType` =?,`date` =?,`status` =? WHERE (`pk_compID` = ?)", [complaints.custID,complaints.compType,complaints.date,complaints.status,id], function (err, res) {
    
          if(err) {
               console.log("error: ", err);
               result(null, err);
             }
           else{   
           result(null, res);
            }
   }); 
};  


Complaints.remove = function(complaintsId, result){
    sql.query("DELETE FROM `db_onlineshopping`.`tbl_complains` WHERE `pk_compID`  = ?", [complaintsId], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= Complaints;