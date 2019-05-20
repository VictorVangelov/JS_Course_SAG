function simple(){function scope(x, y){


	function foo(){
		console.log(x+y);
	}
	return foo;
}

let bar = scope(2,3);
bar();
};

var colors = ['red','green','blue'];


function changeBG(id, colorParam){
	let node = document.getElementById(id);
	node.style.color = colorParam;
	console.log(`changeBG is invoked with id = ${id} and color = ${colorParam}`);
}

function callback(i){
	console.log(`loging i= ${i}`);
	setTimeout(function(){changeBG('box', colors[i])}, (1+i)*1000);
  ;
}


for(var i = 0, length1 = colors.length; i < length1; i++){
	console.log(`i in for is ${i}`);
	callback(i);
}
	








