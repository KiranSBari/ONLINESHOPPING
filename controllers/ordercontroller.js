'use strict';
var Customer = require('../model/custdata');


  
exports.insert = function(req, res) {
  
    var new_order = new Customer(req.body);
    console.log(new_cust);
       
    Order.create(new_order, function(err, order) {
        if (err)
        res.send(err);
        res.json({ message:"Data Inserted Successfully"});
      });
  };

