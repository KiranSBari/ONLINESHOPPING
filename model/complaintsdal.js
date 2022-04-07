'user strict';
var sql = require('./db');

//data access logic
var Complaints = function(complaints){        //complaints acts like object

  //initialization code
  //constructor
    this.compID = complaints.compID;
    this.custID = complaints.custID;
    this.discription=complaints.discription;
    this.date = complaints.date;
    this.status = complaints.status;
    
  //  this.created_at = new Date();
};

//code to insert new complaints in table
Complaints.createComplaints = function (newComp, result) {    
  sql.query("CALL insert_complaints(?,?,?,?,?,?);", [newComp.compID,newComp.discription,newComp.custID,newComp.date,newComp.status], function (err, res) {
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
  sql.query("CALL get_all_complaints(); ", function (err, res) {                 
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

Complaints.getComplaintsById = function (compId, result) {
        sql.query("CALL get_comp_byid(?);", compId, function (err, res) {                 
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
        sql.query("CALL get_summary();",function (err, res) {
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
  sql.query("CALL update_complaints(?,?,?,?,?)", [complaints.custID,complaints.discription,complaints.date,complaints.status,id], function (err, res) {
    
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
    sql.query("CALL delete_complaint(?);", [complaintsId], function (err, res) {
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