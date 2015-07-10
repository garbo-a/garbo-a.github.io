/**
 * Created by Garbovskiy on 09.07.2015.
 */

var timerId = function printNumbersInterval() {
    var counter = 1;
    setInterval(function () {
        console.log(counter);
        if (counter == 20)  clearInterval(timerId());
        counter++;
    }, 100);
};


var timerId2 = function printNumbersInterval() {
    var counter = 1;
    setTimeout(function run() {
        console.log(counter);
        if (counter == 20)  clearTimeout(timerId2());
        counter++;
        setTimeout(run, 100);
    }, 100);
};


// Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

function f(x) {
    alert(x);
}

function delay(fn, interval) {
    return function () {
        setTimeout(function () {
            fn.apply(this, arguments);
        }, interval);
    }
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);
var f15000 = delay(f, 6500);


f1000('test');
f1500('test2');
f15000('test2------');

/* Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт вызов f не чаще, чем раз в ms миллисекунд.
 «Лишние» вызовы игнорируются. Все аргументы и контекст — передаются. */

function f2(x) {
    console.log(x);
}

function debounce(fn, ms) {
    var state = null;

    var COOLDOWN = 1;

    return function () {
        if (state) return;

        fn.apply(this, arguments);

        state = COOLDOWN;

        setTimeout(function () {
            state = null
        }, ms);
    }
}

var f3 = debounce(f2, 1000);

f3(1); // выполнится сразу же
f3(2); // игнор

setTimeout(function () {
    f3(3)
}, 100); // игнор (прошло только 100мс)
setTimeout(function () {
    f3(4)
}, 1100); // выполнится
setTimeout(function () {
    f3(5)
}, 1500); // игнор


/* Тормозилка
 Напишите функцию throttle(f, ms) — «тормозилку», которая возвращает обёртку, передающую вызов f не чаще, чем раз в ms миллисекунд.
 */

var fun = function (a) {
    console.log(a);
};

function throttle(fn, ms) {

    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }


        fn.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = null;
                savedThis = null;
            }
        }, ms)
    }

    return wrapper;

}

var thr = throttle(fun, 100);

thr(1);
thr(2);
thr(3);

// Lesson 10 task-1

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

var ages =[],
    names=[];

function extract(obj) {


    for (var key in obj) {
        var value = obj[key];
        if( typeof value == 'number' ) {
            ages.push(value)
        } else {
            names.push(value);
        }
    }
}

extract(obj);


getMaxNumber = [1,30,40,2,7];

getMaxNumber.sort(function(a,b) {return a - b;}).slice(-1);


Math.max.apply(this, getMaxNumber);


/////////

str = 'the quick brown fox';
str.split('').sort().join('');


function theLongestWord (string) {

}

theLongestWord(str);















