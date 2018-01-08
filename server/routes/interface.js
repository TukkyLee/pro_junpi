var express = require('express');
var router = express.Router();
var user = require('../model/user');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('register',{reg:true,home:false,log:false});
// });

router.post('/register',function(req,res,next){
	console.log('register');
	// console.log(req.body.username);
	// console.log(req.body.password);
	user.create({
		username:req.body.username,
		password:req.body.password
	},function(error,info){
		if(!error){
			console.log(info);
			req.session.users = info;
			console.log(info.username);
			console.log(info.password);
			res.send(info);
			// res.send({"username":info.username,"password":info.password});
			// res.redirect("/home");
		}else{
			console.log('add error');
		}
	})
})

router.post('/login',function(req,res,next){
	user.find({
		username:req.body.username,
		password:req.body.password
	},function(error,info){
		if(!error){
			console.log(info[0]);
			req.session.users=info[0];
			// res.redirect('/home');
			res.send(info);
		}else{
			console.log('login error');
		}
	})
})

module.exports = router;