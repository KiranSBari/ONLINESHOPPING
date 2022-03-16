'use strict';
var Customer = require('../model/custdata');


  
exports.insert = function(req, res) {
  
    var new_cust = new Customer(req.body);
    //console.log(new_cust);
  
  
    //handles null error 
     if(!new_cust.pk_custID || !new_cust.firstName ||!new_cust.contactNum || !new_cust.location){
        res.status(400).send({ error:true, message: 'Enter Valid data' });
      }
     else{
    Customer.create(new_cust, function(err, cust) {
        if (err)
        res.send(err);
        res.json({ message:"Data Inserted Successfully"});
      });
    }
  };

