/**
 * Created by Garbovskiy on 17.06.2015.
 */
//
//Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.
//
//Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

function fib(n) {
    var firstNum = 1;
    var secondNum = 0;
    var resultNum = 0;

    for (i = 0; i < n; i++) {
        secondNum = firstNum + resultNum;
        firstNum = resultNum;
        resultNum = secondNum;
    }
    return resultNum;
}

console.log(fib(77));

//Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

function checkSpam(str) {

    return ~str.toLowerCase().indexOf('spam') || ~str.toLowerCase().indexOf('sex') ? true : false;
}

checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false

//Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'

function checkStrLength(str) {
    return str.length <= 20 ? str : str.slice(0, 17) + '...';
}

checkStrLength("ajhsfklh sdfhkljsdhf kjshdfkjh");

var user = {};
user.name = 'Sergey';
user.surname = 'Petrov';
user.name = 'Andrey';
user.age = 30;
delete user.name;
console.log(user);

function checkObj(obj) {

    return Object.keys(obj) === 0;

}

console.log(checkObj({}));

var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
}

function sumAll(obj) {
    var sum = 0;
    for (var key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(sumAll(salaries));


////////////////////////

//возвращает последний элемент массива

arr = [1, 2];
function lastEl(array) {
    return array[array.length - 1];
}

console.log(lastEl(arr));

function plusOne(array, x) {
    array.push(x);
    return array;
}

console.log(plusOne(arr, 5));

///////////////////////

fruits = ['apple', 'orange'];
fruits.push('kiwi');
fruits[fruits.length - 2] = 'pear';
console.log(fruits.shift());
fruits.unshift('apricots', 'peach');
console.log(fruits);

////////////////////////Написать функцию которая принимает на вход массив и возвращает случайное значение из этого массива.

function randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomArr([1, 2, 3, 4]));

////////////////////

function find(arr, value) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) return i;
    }
    return -1;
}

console.log(find(['a', 'b', 'c'], 'a'));


///////////////////

function filterRange(arr, a, b) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i <= b]) {
            result.push(arr[i]);

        }

    }
    return result;
}

////////////////// УРОК 5 - задание 1 - максимальное значение в объекте
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function maxTaskCompl(obj) {
    var min = 0;
    for (var key in obj) {
        if (obj[key] > min) {
            min = obj[key];
        }
    }
    return min;
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
var arr = [];

do {
    var a = +prompt("insert number");
    if (!a && a != 0) break;
    arr.push(a);
} while (!isNaN(a));

///////////// Lesson 6 - Task 1 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
var obj = {
    className: 'open menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
        }
    }
    obj.className = arr.join(' ')
}


removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений

///////////// Lesson 6 - Task 2  Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.
var array = ['HTML', 'JavaScript', 'CSS'];

var newArr = array.concat();

newArr.sort();

console.log(newArr);

///////////// Lesson 6 - Task 3 Необходимо отсортировать массив в случайном порядке используя метод sort.

var arrRandSort = [1, 2, 3, 4, 5];

function arraySort(a, b) {
    return Math.random() - 0.5;
}

arrRandSort.sort(arraySort);

console.log(arr); // элементы в случайном порядке, например [3,5,1,2,4]

///////////// Lesson 6 - Task 4  Напишите код, который отсортирует массив объектов people по полю age.

var vasya = {name: 'Вася', age: 23};
var masha = {name: 'Маша', age: 18};
var vovochka = {name: 'Вовочка', age: 6};

var people = [vasya, masha, vovochka];

function ageSort(a, b) {
    return a.age - b.age;
}

people.sort(ageSort);

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age);// 6

///////////// Lesson 6 - Task 5 Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.

var strPal = 'amama';
function isPal (str) {
   var newStr = str.split('').reverse().join('');
    return newStr === str;
}

console.log(isPal(strPal));

///////////// Lesson 6 - Task 6 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

function unique(arr) { // сам не додумался - буду разбираться подробнее
    var result = [];

    nextInput:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i]; // для каждого элемента
            for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
                if (result[j] == str) continue nextInput; // если да, то следующий
            }
            result.push(str);
        }

    return result;
}

var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()

///////////// Lesson 6 - Task 7 Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr) {
    var object = {};
    for (var i = 0; i < arr.length; i++) {
        var an = arr[i].split('').sort().join('').toLowerCase();
        object[an] = arr[i];
    }
    var cleanAnArr = [];
    for ( var key in object) {
        cleanAnArr.push(object[key]);
    }
    return cleanAnArr;
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'