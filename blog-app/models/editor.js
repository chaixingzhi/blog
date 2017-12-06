const mongoose = require("mongoose");

const ArticalSchema = new mongoose.Schema({
	title:{
		type:String,
		require:true,
	},
	content:String,
	author:String,	
});

const ArticalModel = mongoose.model("articals",ArticalSchema,"articals");
module.exports = ArticalModel;