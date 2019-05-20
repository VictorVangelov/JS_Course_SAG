/*student:
	name: String
	age: Number
	address: Object*/
	

let student1 = new Student('Pesho', 23);
let student2 = new Student('Maria', 23);
let student3 = new Student('Racho', 12);


function Student( name,  age){
	console.log("name is = "+ name + ' age = '+age);
// let tjis ={}; using New this two lines are commented, or else it will be undefinded
this.name = name;
this.age = age;
//	return this;
}


console.dir(student1);
console.dir(student2);
console.dir(student3);