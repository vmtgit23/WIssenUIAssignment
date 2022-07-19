function twoLargest(op1, op2, op3) {
    var arr = [op1, op2, op3];
    arr.sort();
    return "Largest number: ".concat(arr[2], "\nSecond largest number: ").concat(arr[1], "\nWritten by: Vikas Tripathi");
}
console.log(twoLargest(4, 2, 9));
