/**
 * Created by Garbovskiy on 16.07.2015.
 */
/* Добавить функциям defer с аргументами
 важность: 4решение
 Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.*/

Function.prototype.defery = function (ms) {
    var self = this;
    return function () {
        var arg = arguments;
        setTimeout(function () {
            self.apply(self, arg)
        }, ms)
    };
};


function fn(a, b, c) {
    console.log(a + b + c*2);
}

fn.defery(1000)(1, 2, 3);
