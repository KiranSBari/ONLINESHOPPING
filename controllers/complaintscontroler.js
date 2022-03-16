'use strict';
var Complaints = require('../model/complaintsdal');

exports.getAll = function(req, res) {
  Complaints.getAllComplaints(function(err, complaints) {
    if (err)
      res.send(err);
    res.send(complaints);
  });
};

/*exports.insert = function(req, res) {
  
  var new_complaints= new Complaints(req.body);

   if(!new_complaints.fk_custID || !new_complaints.description || !new_complaints.date || !new_complaints.orderId || !new_complaints.ratings){
      res.status(400).send({ error:true, message: 'Please provide feedback' });
    }
   else{
    Complaints.createComplaints(new_complaints, function(err, complaints) {
      if (err)
      res.send(err);
    res.json(complaints);
    });
  }
};*/


exports.insert = function(req, res) {
  
  var new_complaints = new Complaints(req.body);

  //handles null error 
  
  if(!new_complaints.pk_compID || !new_complaints.compType || !new_complaints.custID || !new_complaints.date || !new_complaints.status){
    res.status(400).send({ error:true, message: 'Please provide correct data' });
  }
 else{
  Complaints.createComplaints(new_complaints, function(err, comp) {
      if (err)
      res.send(err);
    res.json("Data Inserted Successfully");
    });
  }
};


exports.getBy = function(req, res) {
  Complaints.getComplaintsById(req.params.complaintsId, function(err, complaints) {
    if (err)
      res.send(err);
    res.json(complaints);
  });
};

exports.update = function(req, res) {
  Complaints.updateById(req.params.complaintsId, new Complaints(req.body), function(err, complaints) {
    if (err)
      res.send(err);
    res.json("complaints update successfully");
  });
};

exports.remove = function(req, res) {
  Complaints.remove( req.params.complaintsId, function(err, complaints) {
    if (err)
      res.send(err);
    res.json({ message: 'complaints successfully deleted' });
  });
};