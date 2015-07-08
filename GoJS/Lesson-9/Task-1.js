// Create function sumArgs which sum all its arguments
// Borrowing method
function sumArgs() {
    arguments.reduce = [].reduce;

    return arguments.reduce(function (a, b) {
        return a + b;
    });

}

alert(sumArgs(1, 2, 3));

// Call method


function sumArgs() {

    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });

}

alert(sumArgs(1, 2, 3));

////////////// Decorating function so it can console.log arguments and result

var sum = function (a, b) {
    return a + b;
};

var sayHello = function (str) {
    return str;
};

function makeLogger(fn) {
    return function () {
        console.log(Array.prototype.join.apply(arguments) + ' = ' + fn.apply(this, arguments));
    };
}

sum = makeLogger(sum);
sayHello = makeLogger(sayHello);

sum(10, 20);
sayHello('Oleksandr');

///Вызов user.checkPassword() в коде ниже должен, при помощи ask, спрашивать пароль и вызывать loginOk/loginFail в зависимости от правильности ответа.

"use strict";

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    loginOk: function () {
        alert(this.login + ' вошёл в сайт');
    },

    loginFail: function () {
        alert(this.login + ': ошибка входа');
    },

    checkPassword: function () {
        ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    }
    /* second decision
     checkPassword: function() {
         var self = this;
         ask("Ваш пароль?", this.password,
            function() {
                self.loginOk();
            },
            function() {
                self.loginFail();
            });
        }                           */
};

var vasya = user;
user = null;
vasya.checkPassword();

/* Usage of ask function with carrying
 Эта задача — усложнённый вариант задачи Использование функции вопросов. В ней объект user изменён.
 Теперь заменим две функции user.loginOk() и user.loginFail() на единый метод: user.loginDone(true/false), который нужно вызвать с true при верном ответе и fail — при неверном.
 Код ниже делает это, соответствующий фрагмент выделен.
 Сейчас он обладает важным недостатком: при записи в user другого значения объект перестанет корректно работать, вы увидите это, запустив пример ниже (будет ошибка).
 Как бы вы написали правильно? */

"use strict";

function ask(question, answer, ok, fail) {
    var result = prompt(question, '');
    if (result.toLowerCase() == answer.toLowerCase()) ok();
    else fail();
}

var user = {
    login: 'Василий',
    password: '12345',

    // метод для вызова из ask
    loginDone: function(result) {
        alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
    },

    checkPassword: function() {ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false))}
 /* checkPassword: function() {
        var self = this;
        ask("Ваш пароль?", this.password,
            function() {
                self.loginDone(true);
            },
            function() {
                self.loginDone(false);
            }
        );
    } */
};

var alex = user;
user = null;
vasya.checkPassword();


// DECORATORS - Lesson 9

var timers = {};

function add(a, b){ return a + b; }

function fiveDecorator(fn){
    return function() {
        return fn.apply(null, arguments) + Math.random();
    };
}

var wrongAdd = fiveDecorator(add);
console.log(wrongAdd(10, 20));


var sum3 = function(a, b, c) { return a + b + c; };
var sayHello = function(str) { return str; };

function makeLogger(fn) {
    return function() {
        console.log(arguments);
        console.log(fn.apply(this, arguments));
    };
}

var sumDecorated = makeLogger(sum3);
var sayHelloDecorated = makeLogger(sayHello);

sumDecorated(10, 20, 30);
sayHelloDecorated('Sidko');