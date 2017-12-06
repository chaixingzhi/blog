const express = require("express");
const mongoose = require("mongoose");
const editor = express.Router();
const { UserModel, ArticalModel } = require("../models/index");


editor.get("/editor",(req,res,next)=>{
	const username = req.session.username
	res.render("editor",{username:username});
});

editor.post("/editor",(req,res,next)=>{
	const form = req.body;
	
	const id = req.session.userId;
	form.author = id;
	console.log("form: ",form);
	ArticalModel.create(form,(err,doc)=>{
		if(err){
			return console.log("editorRouter: ",err);
		}
		const artId = doc._id;
		UserModel.findById(artId)
		.then((user)=>{
			user.artical.unshift(doc_id);
			user.save();
		});
		res.redirect('/');
	});


});

module.exports = editor;