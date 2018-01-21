var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
//var fs = require('fs');
//var snippetData = require('../data/codes.json');

//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: false }));

router.post('/save-code', function(req, res, next) {
	
	var title = req.body.title;
	var category = req.body.category;
    var codes = req.body.codes;
    //var txtFile = title.replace(/\s+/g, '-').toLowerCase(); 

    console.log(title);
    console.log(category);
    console.log(codes);

    /*
    fs.writeFile('/public/codes/php/' + txtFile + '.txt', codes, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    res.redirect('/add-snippet');
	});
	*/ 

});

module.exports = router;