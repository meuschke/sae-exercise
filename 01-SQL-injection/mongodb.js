var mysql = require("mysql");
const express = require('express')
const app = express()
const port = 3000

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '123456',
		database : 'test',
		multipleStatements: true
	});
	res.locals.connection.connect();
	next();
});

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/sql-injection', function(req, res, next) {
	console.log(req.query.id)
	res.locals.connection.query('Select * from users WHERE id =' + req.query.id, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}!`))
