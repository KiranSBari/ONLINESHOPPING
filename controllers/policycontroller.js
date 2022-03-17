'use strict';
var Policy = require('../model/policydal');

exports.getAll = function(req, res) {
  Policy.getAllPolicy(function(err, policy) {
    if (err)
      res.send(err);
    res.send(policy);
  });
};

exports.insert = function(req, res) {
  
    var new_policy = req.body;
    //handles null error 
     /*if(!new_task.pk_policieID || !new_task.polName|| !new_task.description || !new_task.category){
        res.status(400).send({ error:true, message: 'Please provide policy' });
      }
     else{*/
     Policy.createPolicy(new_policy, function(err, policy) {
        if (err)
        res.send(err);
      res.json(policy);
      });
    //}
  };

  exports.getBy = function(req, res) {
    Policy.getPolicyById(req.params.policyId, function(err, policy) {
      if (err)
        res.send(err);
      res.json(policy);
    });
  };

  exports.update = function(req, res) {
    Policy.updateById(req.params.policyId, new Policy(req.body), function(err, policy) {
      if (err)
        res.send(err);
      res.json(policy);
    });
  };


  exports.remove = function(req, res) {
    Policy.remove( req.params.policyId, function(err, policy) {
      if (err)
        res.send(err);
      res.json({ message: 'Policy successfully deleted' });
    });
  };