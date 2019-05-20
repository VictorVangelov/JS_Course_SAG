let changeBGColor = function(){
	console.log('changeBGColor is invoked');
 document.body.style.backgroundColor = 'green';


};
console.log("before invoke ")
setTimeout(changeBGColor, 1111);

console.log("after invoke ")



function foo(){



console.log("in foo");
return function(name){
	console.log('hello my name is '+name);
}
}

foo()('patka');






function sum(x){
	return function(y){
		return x+y;
	}
}
console.log('alabala = '+sum(2)(3));