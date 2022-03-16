const { sendStatus } = require('express/lib/response');
const { DEC8_SWEDISH_CI } = require('mysql/lib/protocol/constants/charsets');
var sql = require('./db');

var Order = function(order){
    
    this.pk_orderID=order.pk_orderID;
    this.OrderDate=order.OrderDate;
    this.OrderStatus=order.OrderStatus;
    this.email=order.email;
    this.ProductID=order.ProductID;
    this.CustomerID=order.CustomerID;
};



