'user strict';
var sql = require('./db');

var Policy = function(policy){
    this.pk_policieID = policy.pk_policieID;
    this.polName = policy.polName;
    this.description = policy.description;
    this.category = policy.category;
   
      
  //  this.created_at = new Date();
};


Policy.getAllPolicy = function (result) {
    sql.query("SELECT * FROM db_onlineshopping.tbl_policies;", function (err, res) {
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
    sql.query("INSERT INTO db_onlineshopping.tbl_policies set ?", newPolicy, function (err, res) {
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
  sql.query("SELECT * FROM db_onlineshopping.tbl_policies where pk_policieID = ? ", policyId, function (err, res) {             
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
  sql.query("UPDATE db_onlineshopping.tbl_policies SET polName = ?,description = ?,category = ? WHERE pk_policieID = ?", [policy.polName,policy.description,policy.category, policyId], function (err, res) {
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
  sql.query("DELETE FROM db_onlineshopping.tbl_policies WHERE pk_policieID = ?", [policyId], function (err, res) {
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