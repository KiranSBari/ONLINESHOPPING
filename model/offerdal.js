'user strict';
var sql = require('./db');

var Offers = function(offers){
    this.offersID = offers.offersID;
    this.name = offers.name;
    this.category = offers.category;
    this.discount = offers.discount;
   
      
  //  this.created_at = new Date();
};

Offers.createOffers = function (newOffer, result) {    
    sql.query("CALL insert_offer(?,?,?,?)",[newOffer.offerId,newOffer.name,newOffer.category,newOffer.discount], function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              console.log(res.insertId);
              result(null, res.insertId);
            }
        });           
};


Offers.getAllOffers = function (result) {
    sql.query("CALL get_all_offers();", function (err, res) {
            if(err) {
              // console.log("error: ", err);
              result(null, err);
            }
            else{
              // console.log('offers : ', res);  
              result(null, res);
            }
        });   
};


Offers.getOffersById = function (offerId, result) {
  sql.query("CALL get_offer_byid(?) ", offerId, function (err, res) {             
          if(err) {
            console.log("error: ", err);
            result(err, null);
          }
          else{
            result(null, res);     
          }
      });   
};


Offers.updateById = function(offerId, offers, result){
  sql.query("CALL update_offer(?,?,?,?)", [offers.name,offers.category,offers.discount, offerId], function (err, res) {
          if(err) {
                // console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
            }
    }); 
};


Offers.remove = function(offerId, result){
  sql.query("CALL delete_offer(?)", [offerId], function (err, res) {
              if(err) {
                  // console.log("error: ", err);
                  result(null, err);
              }
              else{
                  result(null, res);
              }
          }); 
};


module.exports= Offers;