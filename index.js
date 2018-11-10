let squares = [];
for(let i = 1; i <= 100; i++){
    let j = i*i;
    squares.push(j);
    function sumOfSquares () {
        return squares.reduce((total, squares) => total + squares, 0);
    }
}

let numbers = [];
for(let i = 1; i <= 100; i++){
    numbers.push(i);
    function sumOfNums () {
        return numbers.reduce((total, numbers) => total + numbers, 0);
    }
    function squareOfNums() {
        return sumOfNums() * sumOfNums()
    }
}
function sumSquareDifference() {
    return sumOfSquares() - squareOfNums()
}
console.log("the sum of the squares of the numbers 1 - 100 is: " + sumOfSquares());
console.log("the square of the numbers 1 - 100 is " + squareOfNums())
console.log("the difference of the sum of the sqares and the square of the sums is: " + sumSquareDifference());