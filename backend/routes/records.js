const express = require("express");
const recordRoutes = express.Router();

const dbo = require("../db/cons.js");
const ObjectId = require("mongodb").ObjectId;
 
recordRoutes.route("/artwork/record").get(function (req, res) {
 let db_connect = dbo.getDb("tina");
 db_connect
   .collection("artwork")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/artwork/record/:id").get(function (req, res) {
 console.log(req.params)
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId( req.params.id )};
 db_connect
     .collection("artwork")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
     });
});
 
recordRoutes.route("/artwork/record/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 const record = JSON.parse(req.body.record);
 db_connect.collection("artwork").insertOne(record, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
recordRoutes.route("/artwork/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb(); 
 let myquery = { _id: ObjectId( req.params.id )}; 
 let newvalues = {   
   $set: {     
     name: req.body.name,    
     position: req.body.position,     
     level: req.body.level,   
   }, 
  }
});
 
recordRoutes.route("/artwork/delete").post((req, response) => {
 let db_connect = dbo.getDb();
    let filter = JSON.parse(req.body.record);
    if (filter._id) {
        filter = {"_id": ObjectId(filter._id)};
    }

    db_connect.collection("artwork").deleteOne(filter, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
    });

});

recordRoutes.route("/artwork/search").post(function (req, res) {
  let db_connect = dbo.getDb("tina");
  var query = JSON.parse(req.body.record); 
  db_connect
    .collection("artwork").find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
 });
 
module.exports = recordRoutes;