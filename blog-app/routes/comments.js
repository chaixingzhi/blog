const express = require("express");
const mongoose = require("mongoose");
const comment = express.Router();
const {ArticalModel, ParentCommentsModel} = require("../models/index");
// const {ArticalModel, CommentsModel} = require("../models/index");

comment.post('/comment',(req,res,next)=>{
	const reqData = req.body;
	console.log("reqData： ",reqData);
	const username = req.session.username;
	// const CommentArr = new ParentCommentsModel;
	// CommentArr.push(reqData);
	CommentsModel.create(reqData,(err)=>{
		if(err){
			console.log("Comment err is: ",err);
			return next(err);
		}
		res.redirect("back");
	});
	
});

module.exports = comment;
