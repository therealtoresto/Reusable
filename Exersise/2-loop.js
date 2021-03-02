'use strict';

const range = (start, end) => {
    const mas = [];
    let index = 0;
    for (let i = start; i <= end; i++ ) {
        mas[index] = i;
        index++;
    }
    return mas;
}

console.log(range(2 ,9));