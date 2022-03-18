'use strict';

//roter mapping code
module.exports = function(app) {
  var custController = require('../controllers/custcontroller');
  var orderController = require('../controllers/ordercontroller');

  var feedbackController= require('../controllers/feedbackcontroler');
  var complaintsController=require('../controllers/complaintscontroler')

  var offerController = require('../controllers/offercontroller');
  var policyController = require('../controllers/policycontroller');
  var complaintsController = require('../controllers/complaintscontroler');
  var feedbackController = require('../controllers/feedbackcontroler');


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
 
app.route('/feedback/summary')
   .get(feedbackController.getFullSummary);

app.route('/complaints/summary')
   .get(complaintsController.getFullSummary)

app.route('/feedback/:feedbackId')
    .get(feedbackController.getBy)
    .delete(feedbackController.remove);


app.route('/complaints')
    .get(complaintsController.getAll)
    .post(complaintsController.insert);
  
 app.route('/complaints/:complaintsId')
     .get(complaintsController.getBy)
     .put(complaintsController.update)
     .delete(complaintsController.remove);   

app.route('/offers')
     .get(offerController.getAll)
     .post(offerController.insert);
   
app.route('/offers/:offerId')
      .get(offerController.getBy)
      .put(offerController.update)
      .delete(offerController.remove);


  app.route('/policy')
  .get(policyController.getAll)
  .post(policyController.insert);

app.route('/policy/:policyId')
   .get(policyController.getBy)
   .put(policyController.update)
   .delete(policyController.remove);



  };