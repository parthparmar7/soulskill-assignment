var express = require('express');
var routes = express.Router();
var db = require('../models/database');
var app=express();
var itemRoutes = express.Router();

itemRoutes.route('/add').post(function (req, res) {
  var myData = new db(req.body);
 	myData.save()
 	.then(name => {
 	res.send("Success");
 	})
 	.catch(err => {
 	res.status(400).send("unable to save to database");
    });
});



module.exports = itemRoutes;