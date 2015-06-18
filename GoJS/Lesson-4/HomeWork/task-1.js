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

function checkSpam(str){

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