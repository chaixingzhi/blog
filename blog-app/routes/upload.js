const express = require("express");
const multer = require("multer");

const upload = express.Router();

const { UserModel } = require("../models/index");
const dest = "public/images";
const uploadMid = multer({dest:dest});

upload.post("/",uploadMid.single("upload"),(req,res,next)=>{
	const funcNum = req.query.CKEditorFuncNum;
	console.log("req.query: ",req.query);
	console.log("req.query.CKEditorFuncNum: ",funcNum);
	console.log("file:", req.file);

	const filePath = req.file.path.replace(/\\/g,"/");
	const start = filePath.indexOf("/");
	const path = filePath.substr(start);
	console.log("req.path: ",req.file.path);
	console.log("path: ",path);
	res.send(`<script>window.parent.CKEDITOR.tools.callFunction(${funcNum},'${path}')</script>`);
});

module.exports = upload;


