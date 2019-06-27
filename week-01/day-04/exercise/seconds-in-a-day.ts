let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
const secondsInAnHour: number = 3600;
const secondsInAMinute: number = 60;
const secondsInADay: number = 86400;

let currentHoursInSeconds: number = currentHours * secondsInAnHour;
let currentMinutesInSeconds: number = currentMinutes * secondsInAMinute;

let theTimeInSeconds: number = currentHoursInSeconds + currentMinutesInSeconds + currentSeconds;
let remainingSeconds: number = secondsInADay - theTimeInSeconds;

console.log(remainingSeconds);





// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

