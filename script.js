'use strict';

// const text = 'yellow diamond ring on my fist like a pineapple\n' +
//     'Shaped like a coke bottle, so I threw a dime on her (Damn)\n' +
//     'Shine on her, grind on her, I might wine and dine her (Yeah)';

const word = 'pineapple';
const input = document.querySelector('input[name=todo]');
const edit = document.querySelector('input[name=edit]');
const ul = document.querySelector('ul');
const h1 = document.createElement('h1');
input.addEventListener('keyup', onKey);
edit.style.display = 'none';

function capitalizeWord(word) {
    // let letters = word.split('');
    // let upper = letters[0].toUpperCase();
    // letters.splice(0, 1, upper);
    // return letters.join('');

    return word.charAt(0).toUpperCase() + word.slice(1);
}

function onKey(event) {
    if (event.keyCode === 13 && input.value.trim()) {
        const li = createListElement(input.value.trim());
        ul.appendChild(li);

        input.value = "";
    }
}

function createListElement(input) {
    const li = document.createElement("li");
    const inputText = document.createTextNode(input);
    const span = document.createElement('span');

    const buttonDelete = createButton('Delete', deleteItem);
    const buttonEdit = createButton('Edit', editItem);

    span.appendChild(inputText);
    li.appendChild(span);

    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);

    return li;
}

function createButton(text, handler) {
    const genericButton = document.createElement('button');
    const buttonText = document.createTextNode(text);

    genericButton.appendChild(buttonText);
    genericButton.addEventListener('click', handler);

    return genericButton;
}

function deleteItem(event) {
    const closestLi = event.target.closest('li');

    function deleteLiItem() {
        closestLi.remove();
    }

    setTimeout(deleteLiItem, 1000);
    closestLi.style.opacity = '0';
    closestLi.style.transition = '1s';
    closestLi.style.transform = 'translateX(250%)';
}

function editItem(event) {
    const listItem = event.target.closest('li');

    function getEditInput(event) {

        if (event.keyCode === 13 && edit.value.trim()) {
            const span = document.createElement('span');
            const text = document.createTextNode(edit.value);
            span.appendChild(text);

            listItem.firstChild.replaceWith(span);

            edit.removeEventListener('keyup', getEditInput);
            edit.style.display = 'none';
        }
    }

    edit.value = listItem.firstChild.textContent;
    edit.style.display = 'inline-block';
    edit.addEventListener('keyup', getEditInput);
    edit.focus();
    edit.select();
}

// setInterval();
// setTimeout();
