var express = require('express');
var path = require('path');
var app = express();

//var dataFile = require('./data/php.json');
//app.locals.codeData = require('./data/codes.json');

//var codeFile = require('./data/codes.json');

app.set('port', process.env.PORT || 3000);

//app.set('codeData', codeFile);

//app.set('appData', dataFile);
app.set('view engine', 'ejs');
//app.set('views', __dirname +'/app/views');
app.set('views', path.resolve(__dirname, '../app/views'));
//app.set('pathURL', path.resolve(__dirname, '../app/codes'));


app.use(express.static(path.resolve(__dirname, '../app/public')));
app.use(require('./routes/index'));
app.use(require('./routes/category'));
app.use(require('./routes/add'));
app.use(require('./routes/delete'));
//app.use(require('./routes/save'));

//app.use(requrie('./routes/savecode'));





var server = app.listen(app.get('port'), function() {
	console.log('Listening on port '+ app.get('port'));
});