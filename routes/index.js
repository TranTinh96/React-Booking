var express = require('express');
var bodyparser = require('body-parser');
var parser = bodyparser.urlencoded({ extended: false });
var router = express.Router();

var arrGirl = ["Diễm Quỳnh", "Nguyễn Dương Khả Tú", "Lê Quỳnh Anh", "Tuyến Minh"]



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
*
*
*  Project Note 
*
*
*/

router.get('/repair', function (req, res, next) {
  res.render('repair', { title: 'Express' });
});

router.post('/getNode', function (req, res, next) {
  res.send(arrGirl);
})

router.post('/add', parser, function (req, res) {
  var newNode = req.body.note;
  console.log(newNode);
  arrGirl.push(newNode);
  res.send(arrGirl);
});

router.post('/deleteGirl', parser, function (req, res) {
  var newNode = req.body.note;
  console.log(newNode);
  var deleGirl = arrGirl.indexOf(newNode);
  arrGirl.splice(deleGirl, 1);
  res.send(arrGirl);
});


router.post('/save', parser, function (req, res) {
  var id = req.body.id;
  var newNode = req.body.val;
  arrGirl[id] = newNode;
  res.send(arrGirl);
  console.log(arrGirl)

});

/*
*
*
*  Smart Phone ( TGDD,CellPhone)
*
*
*/
router.get('/hotgirl', function (req, res) {
  res.render('smart')
})


/*
*
*
*  Smart Phone ( TGDD,CellPhone)
*
*
*/
router.get('/store', function (req, res) {
  res.render('store')
})




module.exports = router;
