var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var db = require('./models/database');
var bodyParser = require('body-parser');
var cors = require('cors');
var itemRoutes = require('./routes/routes');
var port= process.env.PORT || 4000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', itemRoutes);



app.listen(port, () => {
 console.log("Server listening on port " + port);
});
