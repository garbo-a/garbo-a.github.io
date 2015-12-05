/**
 * Created by Garbovskiy on 16.07.2015.
 */

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr.reduce(function (result, it) {
    if (it % 2 == 0) result *= it;
    return result;
}, 1));


function fn() {
    console.log([].join.apply(arguments, [' ']));
}

var delay = function (f, ms) {
    return function () {

        var arg = arguments;
        setTimeout(function () {
                f.apply(null, arg)
            }, ms
        );
    }
};
// Функция создающая вызов функции не чаще чем ... мс
var dec = delay(fn, 2000);

console.log(dec('Petya', "Kry", 'Ivanovich', 'Petrovich'));


function consoleLog(x) {
    console.log(x)
}

function debounce(f, ms) {
    var canRun = true;

    return function () {
        if (!canRun) return;
        running = false;
        f.apply(null, arguments);
        setTimeout(function () {
            running = true;
        }, ms);
    }
}

var f = debounce(consoleLog, 1000);
f(1);
f(2);
setTimeout(function () {
    f(3)
}, 100); // игнор (прошло только 100мс)
setTimeout(function () {
    f(4)
}, 1100); // выполнится
setTimeout(function () {
    f(5)
}, 1500); // игнор

// duplicator
Array.prototype.duplicate = function () {
    var arr = this;
    return arr.concat(arr);
};
[1, 2, 3, 4, 5, 6, 7].duplicate();
