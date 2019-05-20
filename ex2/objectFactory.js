/*student:
	name: String
	age: Number
	address: Object*/
	

let student1 = createStudent('Pesho', 23);
let student2 = createStudent('Maria', 23);
let student3 = createStudent('Racho', 12);


function createStudent( name,  age){
	console.log("name is = "+ name + ' age = '+age);
let obj ={};
obj.name = name;
obj.age = age;
	return obj;
}


console.dir(student1);
console.dir(student2);
console.dir(student3);