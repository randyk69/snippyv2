var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

//var snippetData = require('../data/codes.json');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.delete('/delete-code/:key', function(req, res) {

    var obj;
    var temp = req.params.key;
    var temparr = temp.split("-");
    var codeData = require(path.resolve(__dirname, '../data/') + '/' + temparr[1] + '.json');

    /*
    var obj;
    var temp = req.params.key;
    var temparr = temp.split("-");
    var codeData = require(path.resolve(__dirname, '../data/') + '/' + temparr[1] + '.json');

    codeData.splice(temparr[0],1);
    fs.writeFile(path.resolve(__dirname, '../data/') + '/' + temparr[1] + '.json', JSON.stringify(codeData), 'utf8', function(err) {
        if (err) {
          console.log(err);
        }
    });
    res.json(codeData)
    */

    //save json file
    fs.readFile('./data/' + temparr[1] + '.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);
        //for (i=0; i<5 ; i++){
        obj.splice(temparr[0], 1);
        //}
        fs.writeFile('./data/' + temparr[1] + '.json', JSON.stringify(obj), (error) => {
            /* handle error */
            if(err) {
      	        return console.log(err);
      	    }
            //res.redirect('/category/'+temparr[1]);
        });
    }});

    res.json(temparr[1]);

});



module.exports = router;
