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
a + b >= 3 ? result = 'Yep!' : result = 'Noup!';


var name = 'admin', text;

name == 'admin' ? text = 'Hi':
       name == 'manager' ? text = 'Hello':
            name == '' ? text = 'No login':
                text = '';

