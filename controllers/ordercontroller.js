'use strict';
var Order = require('../model/orderdata');


  
exports.insert = function(req, res) {
  
    var new_order = new Order(req.body);
    console.log(new_order);
       
    Order.create(new_order, function(err, order) {
        if (err)
        res.send(err);
        res.send("Your order placed Successfully. Thank You :) ");
      });
  };


    
exports.remove = function(req, res) {
  Order.remove( req.params.Id, function(err, order) {
    if (err)
      res.send(err);
    res.send('Order Cancelled' );
  });
};
