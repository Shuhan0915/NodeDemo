var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shout',function(req,res,next) {
  let input = req.query.text;
  res.json( { result: input.toUpperCase() })
});

module.exports = router;
