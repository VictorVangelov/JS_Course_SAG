//this in global scope
this.sag = 'test';
console.dir(this); // window from browser
console.log(global.sag) ;// test

// this in function