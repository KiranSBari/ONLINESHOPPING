var sql = require('./db');

var Order = function(order){
    
    this.pk_orderID=order.pk_orderID;
    this.OrderDate=order.OrderDate;
    this.OrderStatus=order.OrderStatus;
    this.email=order.email;
    this.ProductID=order.ProductID;
    this.CustomerID=order.CustomerID;
};



