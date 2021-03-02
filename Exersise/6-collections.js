'use strict';

const collection = [
    { name: 'Marcus Aurelius', phone: '+380883465723'},
    { name: 'Victor Glushkov', phone: '+380883666723'},
    { name: 'Mao Zedong', phone: '+380573465723'},
    { name: 'Nicola Tesla', phone: '+380994465723'},
    { name: 'Rene Descartes', phone: '+380889666723'},
];

const findPhoneByName = name => {
    for (let obj of collection) {
        if (obj.name === name) return obj.phone;
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

const findPhoneByName2 = name => hash[name];

console.log(`findPhoneByName2('Mao Zedong') : ` + findPhoneByName2('Mao Zedong'));
