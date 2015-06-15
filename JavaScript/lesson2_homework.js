/**
 * Created by Garbovskiy on 10.06.2015.
 */
/**
function checkYear(year) {
    if (year !== '2015') {
        alert ('С луны свалися? 2015!');
    } else {
        alert ('Вы правы!');
    }
}

var year = prompt('Insert present year','');

checkYear(year);


function checkNum(num) {
    if (num > 0) {
        return 1;
    } else if (num < 0) {
        return -1;
    } else {
        return 0;
    }
}


var num = +prompt("Insert number", '');

alert( checkNum(num) );
*/

var userLogin = prompt('Type your login', '');

if(userLogin == 'admin') {
   var userPass = prompt('Insert your password', '');
    if(userPass) {
        alert('Access denied');
    } else {
        alert('Cancelled');
    }
} else {
    userPass = prompt('Insert your password', '');
    if(userPass == 'passw0rd') {
        alert('Welcome home!');
    } else if (userPass) {
        alert('Wrong password');
    } else {
        alert('Cancelled');
    }
}

var a = 1, b = 2;
result = a + b >= 3 ? 'Yep!' :  'Noup!';


var name = 'admin', text;

name == 'admin' ? text = 'Hi':
       name == 'manager' ? text = 'Hello':
            name == '' ? text = 'No login':
                text = '';

var browser;

if(browser == 'IE') {
    alert('О, да у вас IE');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('browser norm!');
} else {
    alert('kto zdes?');
}

switch(+prompt("insert a", '')) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case(2):
    case(3):
        alert('2,3');
        break;
}

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
var a = '';
for (var i = 0; i < 7; i++) {
    console.log(a += '#')
}

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 5));

function min(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(1, 5));