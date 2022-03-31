'use strict';
var Feedback = require('../model/feedbackdal');

<<<<<<< HEAD
exports.getAll= function(req, res) {
  Feedback.getAlFeedback(function(err, feedback) {
=======
//function to  get all feedback
exports.getAll = function(req, res) {
  Feedback.getAllFeedback(function(err, feedback) {
>>>>>>> d7913b24e7aa5ea77f07c3b5d401fbd6edb503e1
    if (err)
      res.send(err);
    res.send(feedback);
  });
};

//code to get count of feedback
exports.getFullSummary = function(req, res) {
  Feedback.summary(function(err, sum_back) {
    if (err)
      res.send(err);
    res.send(sum_back);
  });
};


//code to insert new feedback
exports.insert = function(req, res) {
  

  var new_feedback = new Feedback(req.body);

  //Handles null error 
   if(!new_feedback.custID || !new_feedback.description|| !new_feedback.date || !new_feedback.ratings){
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

//code to get feedback by id
exports.getBy = function(req, res) {
  Feedback.getFeedbackById(req.params.feedbackId, function(err, feedback) {
    if (err)
      res.send(err);
    res.send(feedback);
  });
};


//code to remove feedback
exports.remove = function(req, res) {
  Feedback.remove( req.params.feedbackId, function(err, feedback) {
    if (err)
      res.send(err);
    res.json('Deleted Successfully');
  });
};