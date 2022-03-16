var sql = require('./db');

var Order = function(order){
    
    this.pk_orderID=order.pk_orderID;
    this.OrderDate=order.OrderDate;
    this.OrderStatus=order.OrderStatus;
    this.email=order.email;
    this.ProductID=order.ProductID;
    this.CustomerID=order.CustomerID;
};


Order.create = function (new_order, result) {    
    sql.query("INSERT INTO tbl_customers set ?", new_order, function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res.pk_orderID+" Data entered successfully");
              result(null, res.pk_orderID);
            }
        });           
};

module.exports= Order;