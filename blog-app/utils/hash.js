const crypto = require("crypto");
const secret = "4546455asdfas35f4s5a4f5fasdfaf4545fa";



const hmac = function(str){
	const hmac1 = crypto.createHmac("sha256",secret);
	hmac1.update(str);
	return hmac1.digest("hex");
}
module.exports = hmac;