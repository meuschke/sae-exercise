const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const port = 3000

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myproject';

//Database connection
app.use(function(req, res, next){
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, client) {
	  console.log("Connected successfully to mongo");

	  const db = client.db(dbName);
		res.locals.db = db
	 	next();
	});
});

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/sql-injection', function(req, res, next) {
	console.log(req.query.id)
	var query = {
         id: req.query.id
     }

   res.locals.db.collection('users').findOne(query, function (error, user) {
		 if (error) throw error;
		 res.send(JSON.stringify({"status": 200, "error": null, "response": user}));
   });
});

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`))
