function request(order){
	console.log("custom order",order);
	response(function(){
		console.log("Delivered data", order);
	})
}
function response(callback){
	setTimeout(callback, 5000);
}
request(1);
request(2);
request(3);
request(4);
request(5);