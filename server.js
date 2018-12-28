// ##server.js##

const arangojs = require('arangojs');
const express = require('express');
const bodyParser = require('body-parser');

// ## Const variables for connecting to ArangoDB database
const dbConfig = {
	host: '127.0.0.1',
	port: '8529',
	username: 'root',
	password: '',
	database: 'testerrifqi',
};

// Setup express server
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connection to ArangoDB
const db = new arangojs.Database({
	url: `http://${dbConfig.host}:${dbConfig.port}`
});

db.useBasicAuth(dbConfig.username, dbConfig.password);
db.useDatabase('testerrifqi');

// START THE SERVER
app.listen(port, function(){
	console.log('Magic happens on port ' + port);
});

const taskCollection = db.collection('rumah');

app.get('/api/tasks', function(req, res){
	taskCollection
		.all()
		.then(function(response) {
			console.log(`Retrieved documents.`, response._result);
			return res.status(200).json(response._result);
		})
		.catch(function(error) {
			console.error('Error getting document', error);
			return res.status(500).json(error);
		});
});


app.get('/api/tasks/:id', function(req, res){
	taskCollection
		.firstExample({_key: req.params.id})
		.then(function(doc) {
			console.log(`Retrieved documents by _key "${req.params.id}".`, doc);

			return res.status(200).json(doc);
		})
		.catch(function(error) {
			console.error('Error getting document', error);
			return res.status(500).json(error);
		});
});