'use strict';

const collection = [
    { name: 'Marcus Aurelius', phone: '+380883465723'},
    { name: 'Victor Glushkov', phone: '+380883666723'},
    { name: 'Mao Zedong', phone: '+380573465723'},
    { name: 'Nicola Tesla', phone: '+380994465723'},
    { name: 'Rene Descartes', phone: '+380889666723'},
];

const findPhoneByName = name => {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].name === name)
        return collection[i].phone;
    }
};

console.log(`findPhoneByName('Mao Zedong') : ` + findPhoneByName('Mao Zedong'));

const hash = {
    'Marcus Aurelius': '+380883465723',
    'Victor Glushkov': '+380883666723',
    'Mao Zedong': '+380573465723',
    'Nicola Tesla': '+380994465723',
    'Rene Descartes': '+380889666723'
};

const findPhoneByName2 = name => {
    for (let key in hash) {
        if (key === name)
        return hash[key];
    }
}

console.log(`findPhoneByName('Mao Zedong') : ` + findPhoneByName2('Mao Zedong'));
