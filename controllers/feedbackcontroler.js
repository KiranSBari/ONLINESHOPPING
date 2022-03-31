'use strict';
var Feedback = require('../model/feedbackdal');

exports.getAll= function(req, res) {
  Feedback.getAlFeedback(function(err, feedback) {
    if (err)
      res.send(err);
    res.send(feedback);
  });
};

exports.getFullSummary = function(req, res) {
  Feedback.summary(function(err, sum_back) {
    if (err)
      res.send(err);
    res.send(sum_back);
  });
};



exports.insert = function(req, res) {
  

  var new_feedback = new Feedback(req.body);

  //handles null error 
   if(!new_feedback.fk_custID || !new_feedback.description|| !new_feedback.date || !new_feedback.orderId ||!new_feedback.ratings){
      res.status(400).send({ error:true, message: 'Please provide' });
    }
   else{
    Feedback.createFeedback(new_feedback, function(err, feed) {
      if (err)
      res.send(err);
    res.json("Thank you for your feedback.");
    });
  }
};

exports.getBy = function(req, res) {
  Feedback.getFeedbackById(req.params.feedbackId, function(err, feedback) {
    if (err)
      res.send(err);
    res.send(feedback);
  });
};



exports.remove = function(req, res) {
  Feedback.remove( req.params.feedbackId, function(err, feedback) {
    if (err)
      res.send(err);
    res.json('Deleted Successfully');
  });
};