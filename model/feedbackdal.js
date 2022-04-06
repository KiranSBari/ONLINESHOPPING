'user strict';
var sql = require('./db');

//data access logic
var Feedback = function(feedback){     

  //initilization code
    this.custID = feedback.custID;
    this.description = feedback.description;
    this.date = feedback.date;                
    
    this.ratings = feedback.ratings;
      
  //  this.created_at = new Date();
};


Feedback.createFeedback = function (newFeedback, result) {    
  sql.query("INSERT INTO feedback set ?", newFeedback, function (err, res) {
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

  try{

  
        sql.query("Select * from feedback where custID = ? ", feedbackId, function (err, res) {             

               if(err) {
                  console.log("error: ", err);
                  //result(err, null);
                }
                else{
                  result(null, res);     
                }
              
            });   
          }
       
          catch(err){
            result (err,null);

          }
};

//code to get all feedback
Feedback.getAllFeedback = function (result) {
        sql.query("Select * from feedback", function (err, res) {
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
  sql.query("SELECT count(custID) as badfeeedback,(SELECT count(custID) from feedback where ratings>3) as goodfeedback,(SELECT count(custID) from feedback where ratings=3) as mediumfeedback FROM feedback WHERE ratings<3;"
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
    sql.query("DELETE FROM feedback WHERE custID = ?", [id], function (err, res) {
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