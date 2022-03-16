'use strict';
var Order = require('../model/orderdata');


  
exports.insert = function(req, res) {
  
    var new_order = new Order(req.body);
    console.log(new_order);
       
    Order.create(new_order, function(err, order) {
        if (err)
        res.send(err);
        res.json({ message:"Data Inserted Successfully "});
      });
  };


    
exports.remove = function(req, res) {
  Order.remove( req.params.Id, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'Order data successfully deleted' });
  });
};
