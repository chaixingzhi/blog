var express = require('express');
var users = express.Router();
const { UserModel } = require("../models/index");
const multer = require("multer");
const path = require("path");





const dest = "public/static/img";
const uploadMid = multer({dest:dest});
users.post('/upload',uploadMid.single('avatar'),(req,res,next)=>{
	const id = req.session.userId;
	const reqPath = req.file.path.replace(/\\/g,"/");
	const start = reqPath.indexOf("/");
	const path = reqPath.substr(start);
	UserModel.findById(id)
	.then((doc)=>{
		doc.avatar = path;
		doc.save();
		res.redirect('/users');
	})
	.catch((err)=>{
		console.log("Error User.js: ",err);
		next(err);
	})
});

/* GET users listing. */
users.all("/",function(req, res, next) {
	if (req.session.isLogin === "true") {
		next();
	} else {
		res.redirect("/login");
	}
})
users.get("/", 
	function(req, res, next) {
	const id = req.session.userId;
	var user = req.session.username;
	UserModel.findById(id,(err,doc)=>{
		var path = doc.avatar;
		res.render("usercenter", {username: user,imgPath : path});
	});
	
})

users.get("/logout", function(req, res, next) {
	req.session.destroy();
	res.redirect("/");
})

module.exports = users;
