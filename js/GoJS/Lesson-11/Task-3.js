/**
 * Created by Garbovskiy on 16.07.2015.
 */
/* Добавить функциям defer
 важность: 5решение
 Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.
 */

Function.prototype.defer = function (f) {
    setTimeout(this, f);
};

function f() {
    console.log('Privet');
}

f.defer(5000);

