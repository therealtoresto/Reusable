'use strict';

const rangeOdd = (start, end) => {
    const mas = [];
    let index = 0;
    for (let i = start; i <= end; i++ ) {
        if (i % 2 !== 0) {
            mas[index++] = i;
        }
    }
    return mas;
}

console.log(rangeOdd(-2 ,9));