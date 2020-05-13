'use strict';
let h1 = document.createElement("h1");
const button = document.querySelector("button");
document.body.appendChild(h1);
h1.style.position = 'fixed';
const section = document.querySelector('section');

button.addEventListener('click', () => {
        scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        )
    }
);

function buttonDisplay() {
    pageYOffset >= innerHeight ? button.style.display = 'inline-block' : button.style.display = 'none';
}

addEventListener('scroll', () => {
    console.clear();
    const currentHeight = pageYOffset;
    const bodyHeight = document.body.clientHeight;

    let percentage;
    let num;

    buttonDisplay();

    num = Number(currentHeight * 100 / bodyHeight);
    percentage = Number(num * 100 / 75);
    section.style.width = Math.round(percentage) + '%';
    // screenColor(percentage);
    h1.innerHTML = Math.round(percentage);
});

function screenColor(percentage) {
    const number = Math.round(percentage * 2.55);
    document.body.style.backgroundColor = 'rgb(' + number + ',' + number + ',' + number + ')';
}