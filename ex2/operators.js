// use === for to equal check value and type 
//


/*
all statements did not return a value, just execute something
*/


let x= 5, y = '2';
if (x%2 ===0 && x<10) {
	console.log("in true")
}else{
	console.log('faasd lse')
}


/*
fast if is not a statement
*/
let arr = [12,1,2]; // its mutable i.e can change the value
arr[4] = '4';
console.log('arr is '+ arr);
console.log('arr length is = '+arr.length)
//note:
arr.length = 21;
console.log("ner arr is "+arr);
console.dir(arr); // show the structure of the element
arr.fill(5);
console.dir(arr); // show the structure of the element
