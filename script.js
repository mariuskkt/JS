'use strict';

const merc = document.querySelector('.merc');
const golf = document.querySelector('.golf');
const beetle = document.querySelector('.beetle');

const velocity = {
    slow: 10,
    medium: 20,
    fast: 30
};

function constructCar(car, speed, y = 0, rotation = 180) {

    this.positionX = 0;
    this.positionY = y;
    this.rotation = rotation;
    this.car = car;

    this.moveLeft = function () {
        this.positionX -= speed;
        this.rotation = 0;
        return this
    },
        this.moveUp = function () {
            this.positionY -= speed;
            this.rotation = 90;
            return this
        },
        this.moveRight = function () {
            this.positionX += speed;
            this.rotation = 180;
            return this
        }
        ,
        this.moveDown = function () {
            this.positionY += speed;
            this.rotation = 270;
            return this
        }
        ,
        this.render = function () {
            this.car.style.left = this.positionX + 'px';
            this.car.style.top = this.positionY + 'px';
            this.car.style.transform = 'rotate(' + this.rotation + 'deg)';
        }
        ,
        this.move = function (event) {
            switch (event.keyCode) {
                case 87:
                    this.moveUp();
                    break;
                case 68:
                    this.moveRight();
                    break;
                case 65:
                    this.moveLeft();
                    break;
                case 83:
                    this.moveDown();
                    break;
                case 13:
                    this.pedalToTheMetal();
                    break;
            }
            return this;
        };
    this.pedalToTheMetal = function () {
        while (this.positionX < document.body.clientWidth - 300) {
            this.moveRight()
        }
    };
    document.addEventListener('keydown', e => {
        this.move(e)
        this.render();
    });
    this.render();
}

const car = new constructCar(merc, velocity.slow, 300);
const mer = new constructCar(golf, velocity.fast, 700);
