import {Car} from './Car';

export class Ferrari extends Car {
    constructor() {
        const car = document.querySelector('.car_one');
        const controller = {
            'up': 38,
            'down': 40,
            'left': 37,
            'right': 39,
            'metalPedal': 13
        };
        super(car, 20, 200, controller);
    }
}