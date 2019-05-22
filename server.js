// server.js: Main Program

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var db         = require('./db');



var port = 3000;        // set our port

db.connect(function ConnectionHandler(err){
    if (err){
        console.log('Unable to connect to MySQL');
        process.exit(1);
    }
    console.log("Connection to MySQL Successfull");
});



// ROUTES FOR OUR API
// =============================================================================
var router = require('./friends-router.js');         // get an instance of the express Router

app.all('/', function HandleAll(request, response, next){
    console.log(request.connection.remoteAddress);
    next();
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Version 2: Magic happens on port ' + port);
