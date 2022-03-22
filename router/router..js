'use strict';

//roter mapping code
module.exports = function(app) {
  var custController = require('../controllers/custcontroller');
  var orderController = require('../controllers/ordercontroller');

  var feedbackController= require('../controllers/feedbackcontroler');
  var complaintsController=require('../controllers/complaintscontroler')

  var offerController = require('../controllers/offercontroller');
  var policyController = require('../controllers/policycontroller');
  

app.route('/api/customers')
    .get(custController.getAll)
    .post(custController.insert);

app.route('/api/customers/:Id')
    .get(custController.getBy)
    .put(custController.update)
    .delete(custController.remove);

app.route('/api/orders')
   .post(orderController.insert);

app.route('/api/orders/:Id')
   .delete(orderController.remove);

app.route('/api/feedbacks')
   .get(feedbackController.getAll)
   .post(feedbackController.insert);
 
app.route('/api/feedbacks/summary')
   .get(feedbackController.getFullSummary);

app.route('/api/complaints/summary')
   .get(complaintsController.getFullSummary)

app.route('/api/feedbacks/:feedbackId')
    .get(feedbackController.getBy)
    .delete(feedbackController.remove);


app.route('/api/complaints')
    .get(complaintsController.getAll)
    .post(complaintsController.insert);
  
 app.route('/api/complaints/:complaintsId')
     .get(complaintsController.getBy)
     .put(complaintsController.update)
     .delete(complaintsController.remove);   

app.route('/api/offers')
     .get(offerController.getAll)
     .post(offerController.insert);
   
app.route('/api/offers/:offerId')
   .get(offerController.getBy)
   .put(offerController.update)
   .delete(offerController.remove);

app.route('/api/policy')
  .get(policyController.getAll)
  .post(policyController.insert);

app.route('/api/policy/:policyId')
   .get(policyController.getBy)
   .put(policyController.update)
   .delete(policyController.remove);

  };