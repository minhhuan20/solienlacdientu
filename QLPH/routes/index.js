var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', {
    title: 'Login Page'
  });
});

router.get('/home', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    layout: './layouts/sidebar'
  });
})

module.exports = router;