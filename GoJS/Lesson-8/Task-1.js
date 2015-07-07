// Lesson 8  Task 1   Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:

var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        alert(this.step);

    }
};

ladder.up().up().down().up().down().showStep();


// Lesson 8 Task 2 calculator with methods

function Calculator() {
    var operations = {};
    return {
        addMethod: function (op, fn) {
            operations[op] = fn;
        },
        calculate: function (expr) {
            var tokens = expr.split(' ');
            var a = +tokens[0],
                b = +tokens[2],
                op = tokens[1];
            return operations[op](a, b);
        }
    };
}

var powerCalc = new Calculator;
powerCalc.addMethod('*', function (a, b) {
    return a * b;
});
powerCalc.addMethod('/', function (a, b) {
    return a / b;
});
powerCalc.addMethod('**', function (a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
console.log(result); // 8

// Напишите функцию sum, которая будет работать так: sum(1)(2) == 3; // 1 + 2

function sum(a) {
    var currentSum = a;

    function curSum(b) {
        curSum.toString = function () {
            return currentSum;
        };
        currentSum += b;
        return curSum;
    }

    return curSum;
}

alert(sum(1)(2)(3));

// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

function Calculator() {
    var a, b;
    this.read = function () {
        a = +prompt("Insert number", '0');
        b = +prompt("Insert number", '0');
    };
    this.sum = function () {
        return a + b;
    };
    this.mul = function () {
        return a * b;
    }
}

var calculator = new Calculator();
calculator.read();


alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());

// Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

function User(fullname) {
    this.fullName = fullname;

    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return fullname.split(' ')[0];
            },
            set: function (newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }
        },

        lastName: {
            get: function () {
                return fullname.split(' ')[1];
            },
            set: function (newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }
        }

    });
}

var vasya = new User('Василий Пупкин');

// чтение firstName/lastName
alert(vasya.firstName); // Василий
alert(vasya.lastName); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert(vasya.fullName);

/* Добавить в конструктор Article:

 Подсчёт общего количества созданных объектов.
 Запоминание даты последнего созданного объекта. */

function Article() {
    this.created = new Date();
    // ... ваш код ...
    Article.counter++;
    Article.lastCreatedDate = this.created;
}
Article.counter = 0;
Article.lastCreatedDate = 0;

Article.showStats = function () {
  return 'Summary ' + this.counter + ', Last: ' + Article.lastCreatedDate;
};


new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)

