let squares = []; //make a squares array
for(let i = 1; i <= 100; i++){ //for each of the numbers from 1 to 100
    let j = i*i; //square the numbers
    squares.push(j); //add the numbers to the squares array
    function sumOfSquares () {
        return squares.reduce((total, squares) => total + squares, 0); //add everything in the squares array
    }
}

let numbers = []; //make a numbers array
for(let i = 1; i <= 100; i++){// for each of the numbers from 1 to 100
    numbers.push(i); //add the numbers to the numbers array
    function sumOfNums () {
        return numbers.reduce((total, numbers) => total + numbers, 0); //add everything in the squares array
    }
    function squareOfNums() {
        return sumOfNums() * sumOfNums() //square every number from 1 to 100
    }
}
function sumSquareDifference() {
    return sumOfSquares() - squareOfNums() //find the sum/square difference
}
console.log("the sum of the squares of the numbers 1 - 100 is: " + sumOfSquares()); //show the sum of the squares of the numbers from 1 to 100
console.log("the square of the numbers 1 - 100 is " + squareOfNums()) //show the square of the numbers from 1 to 100
console.log("the difference of the sum of the sqares and the square of the sums is: " + sumSquareDifference()); //show the difference between the two
