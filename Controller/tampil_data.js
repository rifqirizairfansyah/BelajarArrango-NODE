var m_harian = require('../models/m_api').collection('rumah');


exports.getdatasemua = function(req, res, next){
	m_harian
		.all()
		.then(function(response) {
			console.log(`Retrieved documents.`, response._result);
			return res.status(200).json(response._result);
		})
		.catch(function(error) {
			console.error('Error getting document', error);
			return res.status(500).json(error);
		});
}


exports.getdatabyid =  function(req, res,next){
	m_harian
		.firstExample({_key: req.params.id})
		.then(function(doc) {
			console.log(`Retrieved documents by _key "${req.params.id}".`, doc);

			return res.status(200).json(doc);
		})
		.catch(function(error) {
			console.error('Error getting document', error);
			return res.status(500).json(error);
		});
}
