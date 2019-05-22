var express = require('express');       // imports the express library
var router = express.Router();          // Router object for routes
var db = require('./db.js');		// Get access to the Database


router.get('/friends', function FriendsGetHandler(request, response){
	db.get().query(
		'SELECT * FROM friends LIMIT 100', 
		function SelectQueryHandler(err, result, fields){
			if (err)
				return done(err);
			response.send(result);
		});
});

module.exports = router;
