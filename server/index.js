const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const session = require('express-session');
const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(session({
	secret: 'friends are the best',
	resave: false,
	saveUninitialized: true
}));
app.use('/', router);
app.use('/*', express.static(__dirname + '/../client/dist'));

app.listen(1337, function() {
  console.log('listening on port 1337!');
})

