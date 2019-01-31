var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://parth:parth@cluster0-shard-00-00-p5exz.mongodb.net:27017,cluster0-shard-00-01-p5exz.mongodb.net:27017,cluster0-shard-00-02-p5exz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true").then(
          () => {console.log('Database is connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

var schema1 = new mongoose.Schema({
 name: String,
 number: Number,
 email: String,
 title: String
});


module.exports= mongoose.model('User', schema1);
