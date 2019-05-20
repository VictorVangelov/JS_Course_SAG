let Car = function(manifacture, speed){
	this.manifacture = manifacture || undefined;
	this.speed = speed || 100;
}
Car.prototype.drive = function(){
	console.log(`Driving with ${this.speed} with name = ${this.manifacture}`)
}

// create ford construcotr
let Ford = function(speed){
	this.manifacture = 'Ford';
	this.speed = speed;
}
Ford.prototype = Object.create(Car.prototype)
let ford1 = new Ford(105);
ford1.drive();