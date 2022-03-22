'user strict';
var sql = require('./db');

//data access logic
var Complaints = function(complaints){        //complaints acts like object

  //initialization code
  //constructor
    this.compID = complaints.compID;
    this.custID = complaints.custID;
    this.compType=complaints.compType;
    this.date = complaints.date;
    this.status = complaints.status;
    
  //  this.created_at = new Date();
};

//code to insert new complaints in table
Complaints.createComplaints = function (newComplaints, result) {    
  sql.query("INSERT INTO complains set ?", newComplaints, function (err, res) {
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
  sql.query("Select * from complains ", function (err, res) {                 
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
        sql.query("Select * from complains where compID = ? ", complaintsId, function (err, res) {                 
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
        sql.query("SELECT count(compID) as ResolvedComplaints, (SELECT count(compID) from complains where status='In Process') as InProcess,(SELECT count(compID) from complains where status= 'Pending') as  Pending,(SELECT count(compID) from complains where status= 'Checked') as  Checked FROM complains WHERE status='Resolved'; "
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
  sql.query("UPDATE `complains` SET `custID` =?,`compType` =?,`date` =?,`status` =? WHERE (`compID` = ?)", [complaints.custID,complaints.compType,complaints.date,complaints.status,id], function (err, res) {
    
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
    sql.query("DELETE FROM `complains` WHERE `compID`  = ?", [complaintsId], function (err, res) {
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