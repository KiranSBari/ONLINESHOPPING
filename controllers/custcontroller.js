'use strict';
var Customer = require('../model/custdata');

exports.getAll = function(req, res) {
    Customer.getAll(function(err, cust) {
      if (err)
        res.send(err);
      else
        res.send(cust);
    });
  };

  
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


  exports.getBy = function(req, res) {
    Customer.getById(req.params.Id, function(err, cust) {
      if (err)
        res.send(err);
      res.json(cust);
    });
  };

  exports.update = function(req, res) {
    Customer.updateById(req.params.Id, new Customer(req.body), function(err, task) {
      if (err)
        res.send(err);
      res.json({ message:"Data Updated Successfully"});
    });
  };

  
exports.remove = function(req, res) {
  Customer.remove( req.params.Id, function(err, cust) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer data successfully deleted' });
  });
};
  