'user strict';
var sql = require('./db');

//data access logic
var Feedback = function(feedback){     

  //initilization code
    this.fk_custID = feedback.fk_custID;
    this.description = feedback.description;
    this.date = feedback.date;                
    this.orderId = feedback.orderId;
    this.ratings = feedback.ratings;
      
  //  this.created_at = new Date();
};

//code to insert new feedback in table

Feedback.createFeedback = function (newFeedback, result) {    
  sql.query("INSERT INTO db_onlineshopping.tbl_feedback set ?", newFeedback, function (err, res) {
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

//code to get feedback by id
Feedback.getFeedbackById = function (feedbackId, result) {
        sql.query("Select * from tbl_feedback where fk_custID = ? ", feedbackId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};

//code to get all feedback
Feedback.getAllFeedback = function (result) {
        sql.query("Select * from tbl_feedback", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                 // console.log('feedback : ', res);   // just to print res value on console 
                  result(null, res);
                }
            });   
};


//code to get count of feedback
Feedback.summary = function (result) {
  sql.query("SELECT count(fk_custID) as badfeeedback,(SELECT count(fk_custID) from tbl_feedback where ratings>3) as goodfeedback,(SELECT count(fk_custID) from tbl_feedback where ratings=3) as mediumfeedback FROM tbl_feedback WHERE ratings<3;"
  , function (err, res) {
          if(err) {
            console.log("error: ", err);
            result(null, err);
          }
          else{
           // console.log('feedback : ', res);   // just to print res value on console 
            result(null, res);
          }
      });   
};

//code to remove feedback
Feedback.remove = function(id, result){
    sql.query("DELETE FROM tbl_feedback WHERE fk_custID = ?", [id], function (err, res) {
                if(!err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports= Feedback;