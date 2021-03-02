'use strict';

const average = (a, b) => (a + b) / 2;

const square = x => x * x;

const cube = x => x * square(x);

const calculate = () => {
    const mas = [];
    for (let i = 0; i < 10; i++) {
        mas[i] = average(square(i), cube(i));
    }
    return mas;
}

console.log('average(1, 7) = ' + average(1, 5));
console.log('square(2) = ' + square(2));
console.log('cube(2) = ' + cube(2));
console.log(calculate());
