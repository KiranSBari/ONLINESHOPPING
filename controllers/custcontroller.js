'use strict';
var Customer = require('../model/custdata');

// exports.getAll = function(req, res) {

//     Customer.getAll(function(err, cust) {
//       if (err){
//         console.log("Error occure while fetching data");
//         res.send(err);
//       }
//       else
//         res.send(cust);
//     });
//   };



exports.getAll = function (req, res) {
  try {
    Customer.getAll(function (err, cust) {
      if (err) {
        throw err;
        console.log("Error occure while fetching data");
        res.send(err);
      }
      else
        res.send(cust);
    });
  } catch {
    console.error("Unable to get data");

  }
};




exports.insert = function (req, res) {

  var new_cust = new Customer(req.body);

  //handles null error 
  //    if(!new_cust.custID || !new_cust.firstName ||!new_cust.contactNum || !new_cust.location){
  //       res.status(400).send({ error:true, message: 'Enter Valid data' });
  //     }
  //    else{
  //   Customer.create(new_cust, function(err, cust) {
  //       if (err)
  //       res.send(err);
  //       res.send("Data Inserted Successfully \n"+ new_cust.custID+" is your UserID \n Cridentials are send to your Mail ID");
  //     });
  //   }
  // };

  if (!new_cust.contactNum) {
    res.status(400).send({ error: true, message: 'Mobile number is empty' });
  }
  else if(!new_cust.firstName)
  {
    res.status(400).send({ error: true, message: 'Name field cannot be empty' });
  }
  else if(!new_cust.location)
  {
    res.status(400).send({ error: true, message: 'Location field is empty' });
  }
  else {
    Customer.create(new_cust, function (err, cust) {
      if (err)
        res.send(err);
      res.send("Registration Successfull \n" + new_cust.custID + " is your UserID \n Cridentials are send to your Mail ID");
    });
  }
};


exports.getBy = function (req, res) {
  try{
  var cust=Customer.getById(req.params.Id)
  if(cust!='')
  res.json(cust);     //if empty show error
 else{
 console.log("No data found")
 res.send("No Data Found with ID="+req.params.Id );
 }
  }catch(e){
    console.log("Error to get data, ID can be wrong")
    res.send("Check ID: "+e);
  }
};

exports.update = function (req, res) {
  Customer.updateById(req.params.Id, new Customer(req.body), function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: "Data Updated Successfully" });
  });
};


exports.remove = function (req, res) {
  Customer.remove(req.params.Id, function (err, cust) {
    if (err)
      res.send(err);
    res.json({ message: 'Customer data successfully deleted' });
  });
};
