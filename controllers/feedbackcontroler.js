'use strict';
var Feedback = require('../model/feedbackdal');

exports.getAll = function(req, res) {
  Feedback.getAllFeedback(function(err, feedback) {
    if (err)
      res.send(err);
    res.send(feedback);
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
    res.json("Data Inserted Successfully");
    });
  }
};

exports.getBy = function(req, res) {
  Feedback.getFeedbackById(req.params.feedbackId, function(err, feedback) {
    if (err)
      res.send(err);
    res.json(feedback);
  });
};



exports.remove = function(req, res) {
  Feedback.remove( req.params.feedbackId, function(err, feedback) {
    if (err)
      res.send(err);
    res.json({ message: 'feedback successfully deleted' });
  });
};