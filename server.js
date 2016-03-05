var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');




var app = express();

var corsOptions = {
	origin: 'http://localhost:8999'
};

app.use(bodyParser.json());
app.use(cors());
app.use(cors(corsOptions));
app.post('/api/login', userCtrl.login);
app.use(session({ secret: config.sessionSecret }));





app.listen(8999, function(){
  console.log("im a lover not a runner");
});
