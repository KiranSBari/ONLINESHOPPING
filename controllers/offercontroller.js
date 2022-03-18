'use strict';
var Offers = require('../model/offerdal');

exports.getAll = function(req, res) {
  Offers.getAllOffers(function(err, offers) {
    if (err)
      res.send(err);
    res.json({offers});
  });
};

exports.insert = function(req, res) {
  
    var new_offers = req.body;
  
    //handles null error 
    /* if(!new_task.pk_offersID || !new_task.name|| !new_task.category || !new_task.discount){
        res.status(400).send({ error:true, message: 'Please provide offers' });
      }
     else{*/
     Offers.createOffers(new_offers, function(err, offers) {
        if (err)
        res.send(err);
      res.send("Offer Added Successfully.");
      });
    //}
  };

  exports.getBy = function(req, res) {
    Offers.getOffersById(req.params.offerId, function(err, offers) {
      if (err)
        res.send(err);
      res.json(offers);
    });
  };

  exports.update = function(req, res) {
    var new_offers1 = req.body;
    
    console.log("Request Body:"+req.body);
    Offers.updateById(req.params.offerId, new_offers1, function(err, offers) {
      if (err)
        res.send(err);
      res.send("Offer Updated Successfully");
    });
  };

  exports.remove = function(req, res) {
    Offers.remove( req.params.offerId, function(err, offers) {
      if (err)
        res.send(err);
      res.send('Offer Deleted Successfully ');
    });
  };
  
