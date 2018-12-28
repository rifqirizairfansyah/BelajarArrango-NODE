const arangojs = require('arangojs');
const config = require('../config/DB');
const db = new arangojs.Database({
	url: `http://${config.host}:${config.port}`
});

db.useBasicAuth(config.username, config.password);
db.useDatabase('testerrifqi');



db.collection('rumah');

module.exports = db;