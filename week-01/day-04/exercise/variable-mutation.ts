let a: number = 3;
a += 10;
// make it bigger by 10

console.log(a);

let b: number = 100;
b -= 7;
// make it smaller by 7

console.log(b);

let c: number = 44;
c *= 2;
// double c's value

console.log(c);

let d: number = 125;
d /= 5;
// divide d's value by 5

console.log(d);

let e: number = 8;
e **= 2;
// what's the cube of e's value?

console.log(e);

let f1: number = 123;
let f2: number = 345;
let f3: boolean = f1 > f2;

console.log(f3);
// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
let g3: boolean = g1 < (g2 * 2);

console.log(g3);
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
let i: boolean = h % 11 == 0;

console.log(i);
// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
let i3: boolean = i1 > (i2 ** 2) && i1 < (i2 ** 3);

console.log(i3);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
let k: boolean = j % 3 == 0 || j % 5 == 0;
// tell if j is divisible by 3 or 5 (as a boolean)

console.log(k);
