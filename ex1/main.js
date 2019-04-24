console.log('itWorks')
let asd = document.getElementById('testField');


function changeText(){
	for (let i = 10; i >= 0; i--) {
		console.log(i);
	}
	
	document.getElementById('testField').innerHTML = 'Changed';
	document.getElementById('testField').style.color = 'red';
}