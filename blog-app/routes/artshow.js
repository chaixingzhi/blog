const express = require("express");
const { UserModel, ArticalModel,CommentsModel } = require("../models/index");
// const { UserModel, ArticalModel,ParentCommentsModel } = require("../models/index");
const artical = express.Router();
const getArr = require("../utils/childrenArr");


artical.get("/artshow",(req,res,next)=>{
	const id = req.query.id;
	console.log("showart id: ",id);
	const username = req.session.username;
	// ArticalModel.findById(id,(err,doc)=>{
	// 	const data = doc;
	// 	const children = ParentCommentsModel.children;
	// 	const comments = getArr(children,artical,id);
	// })
	ArticalModel.findById(id,(err,doc)=>{
		const data = doc;
		CommentsModel.find({artical:id})
		.then((users)=>{
			const comments = users;
			res.render("artshow",{username:username, data:data ,comments:comments});
		});
		
	});
});

module.exports = artical;