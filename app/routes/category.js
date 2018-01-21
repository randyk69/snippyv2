var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/category/:cat', function(req, res) {

  var data;
  //var coll_arr;
  //var fileNames = [];
  //var temp;
  var obj;
  var category = req.params.cat;


  fs.readFile('./data/' + category + '.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    //res.render(req.params.cat, {
    res.render('codes', {
      pageTitle: category,
      snippets: obj
    });

  });




    /*

  fs.readFile('./data/codes.json', (err, data) => {
    if (err) throw err;
    //console.log(data);
  });


  switch(req.params.cat) {
	case 'php':
	  data = req.app.get('phpData');
	  coll_arr = data.php_collection;
	  break;
	default:
	  console.log('Category not found...');
  }


  coll_arr.forEach(function(item) {
      temp = item.title;
      fileNames = temp.replace(/\s+/g, '-').toLowerCase();
      console.log(temp.replace(/\s+/g, '-').toLowerCase());
  });
  */

  //data = req.app.get('codeData');
  //coll_arr = obj.code_collection;

  //var data = req.app.get('appData');
  //var php_coll = data.php_collection;


});


router.get('/categories', function(req, res) {

  var data;
  //var coll_arr;
  //var fileNames = [];
  //var temp;
  var obj;

  fs.readFile('./data/categories.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    //res.render(req.params.cat, {
    res.render('categories', {
      pageTitle: 'Categories',
      category: obj
    });

  });

});

router.get('/category-add', function(req, res) {
    res.render('add-category', {
        pageTitle: 'Add a category'
    });

});

router.post('/save-category', function(req, res, next) {

    var obj = [];
    var obj2 = [];
    var json;
    var category = req.body.category;

    //add new category json file
    fs.readFile('./data/categories.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.push({ "cat":category });
            var json = JSON.stringify(obj);
            fs.writeFile('./data/categories.json', json, (error) => {
              /* handle error */
              if (err) throw err;
            });
        }
    });

    obj2.push({"title":"","title2":""});
    json = JSON.stringify(obj2);
    //create the category instance json file
    fs.writeFile('./data/' + category + '.json', json, 'utf8', function(err) {
      if(err) {
          return console.log(err);
      }
      res.redirect('/');
    });

    next;

});



module.exports = router;
