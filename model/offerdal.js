'user strict';
var sql = require('./db');

var Offers = function(offers){
    this.offersID = offers.offersID;
    this.name = offers.name;
    this.category = offers.category;
    this.discount = offers.discount;
   
      
  //  this.created_at = new Date();
};

Offers.createOffers = function (newOffers, result) {    
    sql.query("INSERT INTO onlineshopping.offers set ?", newOffers, function (err, res) {
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
    sql.query("SELECT * FROM offers", function (err, res) {
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
  sql.query("SELECT * FROM offers where offersID = ? ", offerId, function (err, res) {             
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
  sql.query("UPDATE offers SET name = ?, category = ?, discount = ? WHERE offersID = ?", [offers.name,offers.category,offers.discount, offerId], function (err, res) {
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
  sql.query("DELETE FROM offers WHERE offersID = ?", [offerId], function (err, res) {
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