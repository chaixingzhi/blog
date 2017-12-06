
var express = require('express');
var register = express.Router();
const { UserModel } = require("../models/index");
const hmac = require("../utils/hash");
const getCcap = require("../utils/ccap");

register.post("/",(req,res,next)=>{
	const formData = req.body;
	console.log("form: ",formData.content);
	
	if(!formData.password && !formData.content){
		const query = {
			username:formData.username,
		}
		UserModel.findOne(query,{__r: 0},(err,users)=>{
			console.log("users",users);
			if(err){
				console.log("OK");
			}else if(users){
				res.send("error");
			}else if(users == null){
				res.send("succeed");
			}
		});
	}else if(formData.content){
		console.log("OGK");
		getCcap(function(cap){
			console.log("cap: ",cap);
			res.send(cap);
		});
	}else{
		formData.avatar="/upload/0e253ecc257a7591d985cba355429321";
		formData.password = hmac(formData.password);
		UserModel.create(formData,(err)=>{
			if(err){
				console.log("Error is :",err);
				res.render("register",{errMessage:"该昵称已存在"});
				res.send("error");
			}else{
				console.log("db is good");
				res.send("true");
				return res.redirect("/login");
			}
		});
	}
	
});
register.get("/",(req,res,next)=>{
	getCcap(function(cap){
		res.render("register",{data:cap.buffer.toString("base64"),text:cap.text});
	});
		
});

module.exports = register;