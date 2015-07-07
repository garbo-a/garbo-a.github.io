/**
 * Created by Garbovskiy on 27.06.2015.
 */
////////////////// УРОК 5 - задание 1 - максимальное значение в объекте
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function maxTaskCompl(obj) {
    var max = 0;
    for (var key in obj) {
        if (obj[key] > min) {
            min = obj[key];
        }
    }
    return max;
}

console.log(maxTaskCompl(tasksCompleted));

///////////////////////// УРОК 5 - задание 2 Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2.

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (!isNaN(obj[key])) obj[key] *= 2;
    }
}

multiplyNumeric(image);
console.log(image);

///////////////////////// УРОК 5 - задание 3
function calc() {
    var arr = [];

    do {
        var a = +prompt("insert number");
        if (!a && a != 0) break;
        arr.push(a);
    } while (!isNaN(a));

    var summ = arr.reduce(function (current, sum) {
        return current + sum
    });
    return summ;

}

console.log(calc());