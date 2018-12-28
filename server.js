// ##server.js##


const express = require('express');
const bodyParser = require('body-parser');

// ## Const variables for connecting to ArangoDB database

const harian = require('./Routes/routes_data');

// Setup express server
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connection to ArangoDB


app.use('/data', harian);

// START THE SERVER
app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});
