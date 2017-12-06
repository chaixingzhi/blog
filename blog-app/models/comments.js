const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
	content:String,
	artical: {
		type: mongoose.Schema.Types.ObjectId,
	},
	author: {
		type: String,
	},
	createAt: {
		type: Date,
		default: Date.now
	}	
});


// const ParentCommentSchema = new mongoose.Schema({
// 	children:[CommentsSchema],
// });


// const ParentCommentModel = mongoose.model("parentComments",ParentCommentSchema,"parentComments");
// module.exports = ParentCommentModel;








const CommentsModel = mongoose.model("comments",CommentsSchema,"comments");
module.exports = CommentsModel;




