'use strict';

const shoppingCart = {
    milk: 2,
    beer: 3
};


let question;

do {
    const name = prompt('Write in name of a product:');
    const quantity = prompt('Write in quantity:');

    shoppingCart[name] = Number(quantity);

    question = prompt('Do you want to add one more item?Answer \'Y\' for yes');
} while (question === 'Y');

for (const name in shoppingCart) {
    alert(name + ' quantity ' + shoppingCart[name])
}
console.log(shoppingCart);