'use strict';

// console.log(window.innerHeight);
//
// console.log(alert('Shiiiit'));
// console.log(prompt('Your name:'));

let name = "Marius";
name = 13;

let iq = '100';

iq = Number(iq);
console.log(iq);

const age = 100;


const array = [
    'gvazdikas'
];

const obj = {
    name: 'vardas',
    age: 20
};

console.log(array[0]);
console.log(obj);
console.log(name);
console.log(age);

let result;

function isVisible() {
    iq < 100 ? result = 'dolbas' : result = 'normalus';
}

isVisible();

console.log(result);

function sum(a, b) {
    return a + b;
}

// console.log(sum(10,50));


// input > 10 ? alert('Skaicius per didelis') : alert('ok');


let rand_numb = Math.floor(Math.random() * 11);

console.log(rand_numb);

let input = prompt('Iveskite skaiciu:');

while (Number(input) !== rand_numb) {
    input = prompt('bandyk dar:')
}

alert("Atspejai");