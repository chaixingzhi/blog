var express = require('express');
const { UserModel,ArticalModel } = require("../models/index");
var router = express.Router();

router.all("/",function(req, res, next) {
	if (req.session.isLogin === "true") {
		next();
	} else {
		res.redirect("/login");
	}
});
/* GET home page. */
router.get("/", function(req, res, next) {
	console.log("Session :", req.session);
	console.log("Session Id:", req.session.userId);
	console.log("Cookie :", req.cookies.Carp)
	const userId = req.session.userId;
    ArticalModel.find({ author:userId })
   	.then((doc)=>{
   		const data = doc;

	    UserModel.findById(userId,(err,users)=>{
			var path = users.avatar;
			const user = users.username;
			res.render("index", {username: user, imgPath : path,data:data});
		});
   	})
   	.catch((err)=>{
   		console.log("err,",err);
   	});

});

module.exports = router;
