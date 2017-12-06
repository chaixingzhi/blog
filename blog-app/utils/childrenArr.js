const getArr = function(arr,attr,data){
	var commentsArr = [];
	for(let i = 0;i<arr.length;i++){
		if(arr[i].attr == data){
			commentsArr.push(arr[i]);
		}
	}
	return commentsArr;
}


module.exports = getArr;