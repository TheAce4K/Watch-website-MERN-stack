var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// var MongoClient = require('mongodb').MongoClient;
//
// var url = "mongodb://Jesper-Wistrom:emfME4BEJ%24y%407Qv*@cluster0-shard-00-00-skvgp.mongodb.net:27017,cluster0-shard-00-01-skvgp.mongodb.net:27017,cluster0-shard-00-02-skvgp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Items");

  router.get('/', function (req, res, next) {
    var MongoClient = require('mongodb').MongoClient;

    var url = "mongodb://Jesper-Wistrom:emfME4BEJ%24y%407Qv*@cluster0-shard-00-00-skvgp.mongodb.net:27017,cluster0-shard-00-01-skvgp.mongodb.net:27017,cluster0-shard-00-02-skvgp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Items");
    dbo.collection('Items').find({}, {_id:1, _itemName:1}).toArray(function (err, items) {
        db.close();
        res.send(JSON.stringify(items));
    });
});
})
module.exports = router;
