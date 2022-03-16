'use strict';
module.exports = function(app) {
  var custController = require('../controllers/custcontroller');
  var taskController = require('../controllers/taskcontroller');
  var orderController = require('../controllers/ordercontroller');

app.route('/tasks')
    .get(taskController.getAll)
    .post(taskController.insert);
   
app.route('/tasks/:taskId')
    .get(taskController.getBy)
    .put(taskController.update)
    .delete(taskController.remove);

app.route('/customer')
    .get(custController.getAll)
    .post(custController.insert);

app.route('/customer/:Id')
    .get(custController.getBy)
    .put(custController.update)
    .delete(custController.remove);

// app.route('/order')
//   //  .get(orderController.getAll)
//     .post(orderController.insert);

// app.route('/order/:Id')
//    // .get(orderController.getBy)
//     .put(orderController.update)
//    // .delete(orderController.remove);
  };