'use strict';

const input = Number(prompt('What\'s your age?'));

const rapLyrics = [
    {
        word: 'bitch',
        naughty: true
    },
    {
        word: 'guns',
        naughty: false
    },
    {
        word: 'hoe',
        naughty: true
    },
    {
        word: 'drugs',
        naughty: false
    },
    {
        word: 'coke',
        naughty: true
    },
    {
        word: 'nigga',
        naughty: true
    }
];


const result = input >= 18 ?
    rapLyrics :
    rapLyrics.filter(censor);

function censor(value) {
    return !value.naughty;
}

function getWords(value) {
    return value.word;
}

const header = document.createElement('header');
const main = document.createElement('main');
const lyrics = result.map(getWords);
const h1 = document.createElement('h1');
const headerText = document.createTextNode('Rap song lyrics');
const paragraph = document.createElement('p');
const text = document.createTextNode(lyrics);

h1.appendChild(headerText);
paragraph.appendChild(text);

header.appendChild(h1);
main.appendChild(paragraph);

document.body.appendChild(header);
document.body.appendChild(main);
