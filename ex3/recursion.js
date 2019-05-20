function factoriel(n){
	if(n===1){
		return 1;
	}

	if(n>1){
		return n*factoriel(n-1);
	}
}

console.log(factoriel(5))

