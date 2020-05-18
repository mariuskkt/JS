import {Car} from './Car';

export class Mercedes extends Car {
    constructor() {
        const car = document.querySelector('.car_two');
        super(car, 30, 500);
    }
}


