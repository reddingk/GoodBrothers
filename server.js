//Send Email from Node
//https://codeforgeek.com/2014/07/send-e-mail-node-js/

// server.js
// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration

// config files
//var db = require('./config/db');

// set ports
var port = process.env.PORT || 1213;


/*app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}) );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
*/
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin );
	res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers',
    	'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS'){
        res.send(200);
    } else {
		next();
	}
});

app.engine('.html', require('ejs').__express);
app.use(express.static('./public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
	res.render('index');
});

// start app
app.listen(port);
// User message
console.log('Application is open on port ' + port);
