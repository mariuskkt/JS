'use strict';

const carPic = document.querySelector('img');
const horn = new Audio('car+horn+x.mp3');
const engine = new Audio('Corvette+pass.mp3');

const car = {
    positionX: 0,
    positionY: 0,
    rotation: 0,
    moveLeft() {
        this.positionX -= 10;
        this.rotation = 0;
    },
    moveUp() {
        this.positionY -= 10;
        this.rotation = 90;
    },
    moveRight() {
        this.positionX += 10;
        this.rotation = 180;
    },
    moveDown() {
        this.positionY += 10;
        this.rotation = 270;
    },
    render() {
        carPic.style.left = this.positionX + 'px';
        carPic.style.top = this.positionY + 'px';
        carPic.style.transform = 'rotate(' + this.rotation + 'deg)';
        engine.play();
    },
    move(event) {
        if (event.keyCode === 87) {
            car.moveUp();
            car.render();
        }
        if (event.keyCode === 83) {
            car.moveDown();
            car.render();
        }
        if (event.keyCode === 68) {
            car.moveRight();
            car.render();
        }
        if (event.keyCode === 65) {
            car.moveLeft();
            car.render();
        }
        if (event.keyCode === 32) {
            horn.play();
        }
    }
};

document.addEventListener('keydown', car.move);


