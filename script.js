'use strict';

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const main = document.querySelector('main');

button.addEventListener('click', onClick);

function onClick(event) {
    const article = document.createElement('article');
    const image = document.createElement('section');
    const chatBubble = document.createElement('section');
    const paragraph = document.createElement('p');
    const value = textarea.value.trim();
    const arrayParagraph = textarea.value.split('\n');

    arrayParagraph.forEach(para => {
        const paragraph = document.createElement('p');
        const textNode = document.createTextNode(para);
        paragraph.appendChild(textNode);
        chatBubble.appendChild(paragraph);
    });

    article.className = 'message self';
    image.className = 'image';
    chatBubble.className = 'chat-bubble';
    paragraph.innerHTML = value;

    // article.classList.add('message', 'self');
    // image.classList.add('image');
    // image.classList.add('chat-bubble');
    // paragraph.innerHTML = value;

    if (value) {
        article.appendChild(image);
        article.appendChild(chatBubble);
        main.appendChild(article);
    }

    textarea.value = '';
}