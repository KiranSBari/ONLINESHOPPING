var sql = require('./db');

var Order = function(order){
    
    this.orderID=order.orderID;
    this.orderDate=order.orderDate;
    this.orderStatus=order.orderStatus;
    this.productID=order.productID;
    this.customerID=order.customerID;
};


Order.create = function (new_order, result) {    
    sql.query("CALL insert_order(?,?,?,?,?);", [new_order.orderID,new_order.orderDate,new_order.orderStatus,new_order.productID,new_order.customerID], function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(" Data entered successfully");
              result(null, res.orderID);
            }
        });           
};

Order.remove = function(id, result){
    sql.query("CALL delete_order(?);", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
  };
  
module.exports= Order;