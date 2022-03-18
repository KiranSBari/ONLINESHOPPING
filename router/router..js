'use strict';
module.exports = function(app) {
  var custController = require('../controllers/custcontroller');
  var taskController = require('../controllers/taskcontroller');
  var orderController = require('../controllers/ordercontroller');
  var feedbackController= require('../controllers/feedbackcontroler');
  var complaintsController=require('../controllers/complaintscontroler')

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

app.route('/order')
   .post(orderController.insert);

app.route('/order/:Id')
   .delete(orderController.remove);

app.route('/feedback')
   .get(feedbackController.getAll)
   .post(feedbackController.insert);
 
app.route('/feedback/:feedbackId')
    .get(feedbackController.getBy)
    //.put(taskController.update)
    .delete(feedbackController.remove);


app.route('/complaints')
    .get(complaintsController.getAll)
    .post(complaintsController.insert);
  
 app.route('/complaints/:complaintsId')
     .get(complaintsController.getBy)
     .put(complaintsController.update)
     .delete(complaintsController.remove);   





  };