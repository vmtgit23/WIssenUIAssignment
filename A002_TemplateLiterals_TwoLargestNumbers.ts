function twoLargest(op1: number, op2: number, op3: number): string {
	let arr = [op1, op2, op3];

	arr.sort();

	return `Largest number: ${arr[2]}\nSecond largest number: ${arr[1]}\nWritten by: Vikas Tripathi`
}

console.log(twoLargest(4, 2, 9));