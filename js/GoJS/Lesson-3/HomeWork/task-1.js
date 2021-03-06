/**
 * Created by Garbovskiy on 15.06.2015.
 */

//Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввел другое число — попросить ввести еще раз, и так далее.
//
//Цикл должен спрашивать число пока либо посетитель не введет число, большее 100, либо не нажмет кнопку Cancel (ESC).
//
//Предполагается, что посетитель вводит только числа, предусматривать обработку нечисловых строк в этой задаче необязательно.
do {
    var a = +prompt("insert number > 100");
    if (!a) break;
} while (a < 100);

do {
    var a = +prompt("insert number > 100");

} while (a < 100 && !a);


//Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
//
//Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
//
//    Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
//
//P.S. Код также должен легко модифицироваться для любых других интервалов.
next:
    for (var i = 2; i < 10; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue next;
        }
        console.log(i);
    }

//Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

}

//Исправьте 1ю задачу так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.

for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

}

//Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
function chessStr() {
    var str = '';

    for (var j = 1; j <= 8; j++) {
        if (j % 2 == 0) {
            for (var i = 0; i < 8; i++) {
                str += (i % 2) == 0 ? '#' : ' ';
            }

        } else {
            for (var k = 0; k < 8; k++) {
                str += (k % 2) == 0 ? ' ' : '#';
            }

        }
        str += '\n';
    }

    console.log(str);
}

chessStr();

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(a, n) {
    for (var i = 1; i < n; i++) {
        a *= a;
    }
    return a;
}

console.log(pow(1, 100));
console.log(pow(3, 3));

////////////////////////////////////

function sumTo(n) {
    return n ? n + sumTo(n-1) : 0;
}

function factorial (n) {
    return n ? n * factorial(n-1) : n;
}
factorial(8);

function random( max) {
    return Math.round(Math.round() * max);
}

function upperFirst(str) {
   //return str.length ? str[0].toUpperCase() + str.slice(1, str.length) : str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}