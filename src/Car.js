export class Car {
    constructor(car, speed, y = 0, controller = {
        'up': 87,
        'down': 83,
        'left': 65,
        'right': 68,
        'metalPedal': 32
    }, rotation = 180) {
        this.positionX = 0;
        this.positionY = y;
        this.rotation = rotation;
        this.car = car;
        this.speed = speed;
        this.controller = controller;
        this.move = this.move.bind(this);
        document.addEventListener('keydown', this.move);
        this.render();
    }

    moveLeft() {
        this.positionX -= this.speed;
        this.rotation = 0;
        return this
    }

    moveUp() {
        this.positionY -= this.speed;
        this.rotation = 90;
        return this
    }

    moveRight() {
        this.positionX += this.speed;
        this.rotation = 180;
        return this
    }

    moveDown() {
        this.positionY += this.speed;
        this.rotation = 270;
        return this
    }

    render() {
        this.car.style.left = this.positionX + 'px';
        this.car.style.top = this.positionY + 'px';
        this.car.style.transform = 'rotate(' + this.rotation + 'deg)';
    }

    move(event) {
        switch (event.keyCode) {
            case this.controller['up']:
                this.moveUp();
                this.render();
                break;
            case this.controller['right']:
                this.moveRight();
                this.render();
                break;
            case this.controller['left']:
                this.moveLeft();
                this.render();
                break;
            case this.controller['down']:
                this.moveDown();
                this.render();
                break;
            case this.controller['metalPedal']:
                this.pedalToTheMetal();
                this.render();
                break;
        }
        return this;
    };

    pedalToTheMetal() {
        while (this.positionX < document.body.clientWidth - 300) {
            this.moveRight()
        }
    };
}
