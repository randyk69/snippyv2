var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

//var snippetData = require('../data/codes.json');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-form', function(req, res) {

    var data;
    var obj;

    fs.readFile('./data/categories.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);

        //res.render(req.params.cat, {
        res.render('add', {
          category: obj
        });
    });

	//res.render('add');

});

router.post('/save-code', function(req, res, next) {

	var obj = {
	   code_collection: []
	};

	var title    = req.body.title;
	var category = req.body.category;
    var codes    = req.body.codes;
    var txtFile  = title.replace(/\s+/g, '-').toLowerCase();

    //save json file
    fs.readFile('./data/' + category + '.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.push({ "title": title, "title2":txtFile });
            var json = JSON.stringify(obj);
            fs.writeFile('./data/'+ category +'.json', json, (error) => {
            	if (err) throw err;
            });
        }
    });

    //save to txt file
    fs.writeFile(path.resolve(__dirname, '../public/codes/') + '/' + txtFile + '.txt', codes, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    res.redirect('/');
	  });

	next;
});


router.post('/register', function(req, res, next) {

    var obj = {
       code_collection: []
    };

    var uemail = req.body.email;
    var upass  = req.body.upass;

    //save json file
    fs.readFile('./data/users.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.push({ "uemail": uemail, "upass":upass });
            var json = JSON.stringify(obj);
            fs.writeFile('./data/'+ category +'.json', json, (error) => {
                if (err) throw err;
            });
        }
    });

    next;
});


module.exports = router;
