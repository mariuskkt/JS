'use strict';

const input = document.querySelector('input[name = word]');
const h1 = document.querySelector('h1');
let name;

const vowelsArray = [
    'a', 'e', 'o', 'u', 'i'
];

input.addEventListener('keyup', onKey);

function onKey(event) {
    if (event.keyCode === 13 && input.value.trim()) {
        createHeaderElement(input.value.trim());

        input.style.display = 'none';
        name = input.value.trim();
        h1.innerHTML = name;
    }
}

function createHeaderElement(input) {
    const div = document.createElement("div");

    const buttonVowels = createButton('Vowels', vowels => {
        const filtered = name
            .split('')
            .filter(letter => vowelsArray.find(vowel => letter.toLowerCase() === vowel))
            .join('');
        h1.innerHTML = filtered;
    });
    const buttonConsonants = createButton('Consonants', consonants => {
        const filtered = name
            .split('')
            .filter(letter => !vowelsArray.find(vowel => letter.toLowerCase() === vowel))
            .join('');
        h1.innerHTML = filtered;
    });
    const buttonFullName = createButton('Full name', fullName);

    div.appendChild(buttonVowels);
    div.appendChild(buttonConsonants);
    div.appendChild(buttonFullName);
    document.body.appendChild(div);
}

function createButton(text, handler) {
    const genericButton = document.createElement('button');
    const buttonText = document.createTextNode(text);

    genericButton.appendChild(buttonText);
    genericButton.addEventListener('click', handler);

    return genericButton;
}

// const vowels = () => {
//     const filtered = name
//         .split('')
//         .filter(letter => vowelsArray.find(vowel => letter.toLowerCase() === vowel))
//         .join('');
//     h1.innerHTML = filtered;
// };
//
// const consonants = () => {
//     const filtered = name
//         .split('')
//         .filter(letter => vowelsArray.find(vowel => letter.toLowerCase() === vowel))
//         .join('');
//     h1.innerHTML = filtered;
// }

function fullName() {
    h1.innerHTML = name;
}