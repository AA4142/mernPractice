// express.json() Demo Example

// Importing the express module
var express = require('express');

// Initializing the express and port number
var app = express();
var PORT = 3000;

// Calling the express.json() method for parsing
app.use(express.json());

// Reading content-type
app.post('/', function (req, res) {
   console.log(req.body.name)
   res.end();
})

// Listening to the port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});