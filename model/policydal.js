'user strict';
var sql = require('./db');

var Policy = function(policy){
    this.policieID = policy.policieID;
    this.polName = policy.polName;
    this.description = policy.description;
    this.category = policy.category;
   
      
  //  this.created_at = new Date();
};


Policy.getAllPolicy = function (result) {
    sql.query("SELECT * FROM policies;", function (err, res) {
            if(err) {
              // console.log("error: ", err);
              result(null, err);
            }
            else{
              // console.log('policy : ', res);  
              result(null, res);
            }
        });   
};


Policy.createPolicy = function (newPolicy, result) {    
    sql.query("INSERT INTO policies set ?", newPolicy, function (err, res) {
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



Policy.getPolicyById = function (policyId, result) {
  sql.query("SELECT * FROM policies where policieID = ? ", policyId, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};


Policy.updateById = function(policyId, policy, result){
  sql.query("UPDATE policies SET polName = ?,description = ?,category = ? WHERE policieID = ?", [policy.polName,policy.description,policy.category, policyId], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
            }
    }); 
};


Policy.remove = function(policyId, result){
  sql.query("DELETE FROM policies WHERE policieID = ?", [policyId], function (err, res) {
              if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
              else{
                  result(null, res);
              }
          }); 
};


module.exports= Policy;