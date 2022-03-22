'use strict';
var Complaints = require('../model/complaintsdal'); 


//function to  get all complaints
exports.getAll = function(req, res) {
  Complaints.getAllComplaints(function(err, complaints) {
    if (err)
      res.send(err);
    res.send(complaints);
  });
};

//code to get count of complaints
exports.getFullSummary = function(req, res) {
  Complaints.summary(function(err, complaints) {
    if (err)
      res.send(err);
    res.send(complaints);
  });
};

//code to insert new complaints

exports.insert = function(req, res) {
  
  var new_complaints = new Complaints(req.body);

  //handles null error 
  
  if(!new_complaints.compID || !new_complaints.compType || !new_complaints.custID || !new_complaints.date || !new_complaints.status){
    res.status(400).send({ error:true, message: 'Please provide correct data' });
  }
 else{
  Complaints.createComplaints(new_complaints, function(err, comp) {
      if (err)
      res.send(err);
    res.send("Your Complaint is registered Successfully \n Complained ID is send to your registered Mobile Number.");
    //Call to Get Customer data 
    // call to send message /Email
    });
  }
};

//code to get complaints by id
exports.getBy = function(req, res) {
  Complaints.getComplaintsById(req.params.complaintsId, function(err, complaints) {
    if (err)
      res.send(err);
    res.json(complaints);
  });
};

//code to update complaints
exports.update = function(req, res) {
  Complaints.updateById(req.params.complaintsId, new Complaints(req.body), function(err, complaints) {
    if (err)
      res.send(err);
    else{
        if(req.body.status=="In Process")
        res.json("Your complaint is in process.");
        else if(req.body.status=="Resolved")
        res.json("Complaint Resolved Successfully.");
        else if(req.body.status=="Reject")
        res.json("Complaint has been checked.");
        else 
        res.json("We will ensure this will not happen again.");
    } 
    
  });
};
//to remove complaints
exports.remove = function(req, res) {
  Complaints.remove( req.params.complaintsId, function(err, complaints) {     
    if (err)
      res.send(err);
    res.json('Deleted Successfully.');
  });
};