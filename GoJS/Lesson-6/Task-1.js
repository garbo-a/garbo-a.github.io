/**
 * Created by Garbovskiy on 27.06.2015.
 */
//////////// Lesson 6 - Task 1 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
var obj = {
    className: 'open open menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    obj.className = arr.join(' ')
}


removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений

///////////// Lesson 6 - Task 2  Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.
var array = ['HTML', 'JavaScript', 'CSS'];

var newArr = array.slice().sort();

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

var strPal = 'amama amama';
function isPal (str) {
    var newStr = str.toLowerCase().split(' ').reverse().join('');
    return newStr === str.toLowerCase().split(' ').join('');
}

console.log(isPal(strPal));

///////////// Lesson 6 - Task 6 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

function unique(arr) { // сам не додумался - буду разбираться подробнее СДЕЛАТЬ ЧЕРЕЗ reduce()!!!!!!!!!!
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

/////////////////////////////////////////

function Calculator() {
    var operations = {};
    return {
        addMethod: function (op, fn) {
            operations[op] = fn;
        },
        calculate: function(expr) {
            var tokens = expr.split(' ');
            var a = +tokens[0],
                b = +tokens[2],
                op = tokens[1];
            return operations[op](a,b);
        }
    }
}

var calc = new Calculator();

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log( result ); // 8