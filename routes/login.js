var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

/* POST User details to login page. */
router.post('/', function(req, res) {
  if(req.body.username == 'admin' && req.body.password == '123') {
    res.send('Logged in');
  }
  else {
    res.send('Invalid Credentials');
  }
});

module.exports = router;
