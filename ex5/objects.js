let car = {
	name : "protoCar",
	speed : 100,
	drive(){console.log('Im Driving car with name '+ this.name + ' with speed = '+this.speed)},
	ruk: function(){console.log(`aloooo = ${this.speed}`)}
}

car.drive();
car.ruk();

let ford = Object.create(car);
let audi = Object.create(car, {name:{value:'Audi'}, speed:{value:300}});
// ford.speed = 200;
// ford.drive();
// car.drive();
// audi.drive();

//console.log(car);

for(let field in ford){
	console.log(`field = ${field} and ford[field] = ${ford[field]}`);
}