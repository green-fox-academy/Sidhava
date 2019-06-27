let exampleInput: number = 10;
let sum:number = 0;
let avg:number = 0;



for (let i: number = 1; i <= exampleInput; i ++) {
    sum += i;
    if (i == exampleInput) {
        avg = sum / exampleInput;
        console.log(sum);
        console.log(avg);
    }
}



// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3