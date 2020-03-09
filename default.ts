let discount=function(price:number,rate:number=0.40){
	return price*rate;
}
console.log(discount(500));
console.log(discount(500,0.45));
