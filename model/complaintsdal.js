'user strict';
var sql = require('./db');

//data access logic
var Complaints = function(complaints){        //complaints acts like object

  //initialization code
  //constructor
    this.pk_compID = complaints.pk_compID;
    this.custID = complaints.custID;
    this.compType=complaints.compType;
    this.date = complaints.date;
    this.status = complaints.status;
    
  //  this.created_at = new Date();
};

//code to insert new complaints in table
Complaints.createComplaints = function (newComplaints, result) {    
  sql.query("INSERT INTO db_onlineshopping.tbl_complains set ?", newComplaints, function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res.insertId);
          }
      });           
};


Complaints.getAllComplaints = function (result) {
  sql.query("Select * from tbl_complains ", function (err, res) {                 
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};




//code to get complaints by id

Complaints.getComplaintsById = function (complaintsId, result) {
        sql.query("Select * from tbl_complains where pk_compID = ? ", complaintsId, function (err, res) {                 
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};

//code to get count of complaints 
Complaints.summary = function (result) {
        sql.query("SELECT count(pk_compID) as ResolvedComplaints, (SELECT count(pk_compID) from tbl_complains where status='In Process') as InProcess,(SELECT count(pk_compID) from tbl_complains where status= 'Pending') as  Pending,(SELECT count(pk_compID) from tbl_complains where status= 'Checked') as  Checked FROM tbl_complains WHERE status='Resolved'; "
                  ,function (err, res) {
                if(err) {
                  // console.log("error: ", err);
                  result(null, err);
                }
                else{
                  // console.log('complaints : ', res);  
                  result(null, res);
                }
            });   
};
//code to get complaints updated by id
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

//code to remove complaints
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