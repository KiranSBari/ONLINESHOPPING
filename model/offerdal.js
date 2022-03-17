'user strict';
var sql = require('./db');

var Offers = function(offers){
    this.pk_offersID = offers.pk_offersID;
    this.name = offers.name;
    this.category = offers.category;
    this.discount = offers.discount;
   
      
  //  this.created_at = new Date();
};

Offers.createOffers = function (newOffers, result) {    
    sql.query("INSERT INTO db_onlineshopping.tbl_offers set ?", newOffers, function (err, res) {
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
    sql.query("SELECT * FROM db_onlineshopping.tbl_offers", function (err, res) {
            if(err) {
              console.log("error: ", err);
              result(null, err);
            }
            else{
              console.log('offers : ', res);  
              result(null, res);
            }
        });   
};


Offers.getOffersById = function (offerId, result) {
  sql.query("SELECT * FROM db_onlineshopping.tbl_offers where pk_offersID = ? ", offerId, function (err, res) {             
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
  sql.query("UPDATE db_onlineshopping.tbl_offers SET name = ?, category = ?, discount = ? WHERE pk_offersID = ?", [offers.name,offers.category,offers.discount, offerId], function (err, res) {
          if(err) {
                console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
            }
    }); 
};


Offers.remove = function(offerId, result){
  sql.query("DELETE FROM db_onlineshopping.tbl_offers WHERE pk_offersID = ?", [offerId], function (err, res) {
              if(err) {
                  console.log("error: ", err);
                  result(null, err);
              }
              else{
                  result(null, res);
              }
          }); 
};


module.exports= Offers;