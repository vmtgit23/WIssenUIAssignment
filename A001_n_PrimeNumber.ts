console.log(`n Prime numbers using TypeScript`)

function checkPrime(num: number): boolean {
	let flag: boolean = false;

	//check if the number is <2 	: not prime
	if(num<2)
		return flag;

	//check if the number is 2 or 3	: prime
	if(num==2 || num==3)
		return true;

	//check for divisors in range 2 to root(n) incrementing by 6k+-1	: not prime
	let incrementFlag = true;
	let i=5;
	flag = true;	

	if(num%2==0 || num%3==0) flag = false;

	while(i<=Math.sqrt(num) && flag) {
		
		if(num%i==0) flag = false;

		if(incrementFlag) i = i+2;
		else i = i+4;
	}

	return flag;
}

var n = 10;
	
let count = 0;
let current = 0;
while(count<n)
{
	if(checkPrime(current)) {
		console.log(current);
		count++;	
	}

	current++;
}

console.log(`Written by: Vikas Tripathi`);