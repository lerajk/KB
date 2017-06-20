
//authentication
var express = require('express');
var router = express.Router();
var userdata = require('../controllers/users');


router.get('/register', function(req,res){
	res.render('register');

}); 


router.get ('/login', function(req,res){
  res.render('login');
}); 


//add new user from registration form 
router.post('/register', userdata.createuser);


//login register form 

router.post('/login', userdata.loginuser);


/*
router.get('/', ensureAuthenticated, function(req, res){
  res.render('index');
});
*/ 



module.exports = router;