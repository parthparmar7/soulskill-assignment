var express = require('express');
var app = express();
var port=8080;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://parth:parth@cluster0-shard-00-00-p5exz.mongodb.net:27017,cluster0-shard-00-01-p5exz.mongodb.net:27017,cluster0-shard-00-02-p5exz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var schema1 = new mongoose.Schema({
 name: String,
 number: Number,
 email: String,
 jobtitle: String
});

var User = mongoose.model("User", schema1);


app.get("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
	console.log("register");
 var myData = new User(req.body);
 myData.save()
 .then(name => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});

/*
var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://parth:parth@cluster0-shard-00-00-p5exz.mongodb.net:27017,cluster0-shard-00-01-p5exz.mongodb.net:27017,cluster0-shard-00-02-p5exz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true");
var nameSchema = new mongoose.Schema({
    name: String,
    number: String
});
var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});*/