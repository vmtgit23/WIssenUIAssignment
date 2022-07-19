console.log("n Prime numbers using TypeScript");
function checkPrime(num) {
    var flag = false;
    //check if the number is <2 	: not prime
    if (num < 2)
        return flag;
    //check if the number is 2 or 3	: prime
    if (num == 2 || num == 3)
        return true;
    //check for divisors in range 2 to root(n) incrementing by 6k+-1	: not prime
    var incrementFlag = true;
    var i = 5;
    flag = true;
    if (num % 2 == 0 || num % 3 == 0)
        flag = false;
    while (i <= Math.sqrt(num) && flag) {
        if (num % i == 0)
            flag = false;
        if (incrementFlag)
            i = i + 2;
        else
            i = i + 4;
    }
    return flag;
}
/*
let prime = checkPrime(9);
console.log(prime);
*/
var n = 10;
var count = 0;
var current = 0;
while (count < n) {
    if (checkPrime(current)) {
        console.log(current);
        count++;
    }
    current++;
}
console.log("Written by: Vikas Tripathi");
