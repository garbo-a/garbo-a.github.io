/**
 * Created by ��������� on 04.05.2015.
 */

function checkAge(age) {
    if (age > 18) {
        return confirm('Welcome');
    } else {
        return confirm('�������� ���������?');
    }
}
var age = prompt('Specify your age:');
checkAge(age);

function checkAgeTwo(age2) {

  (age2>18) ? confirm('Welcome') : confirm('�������� ���������?');
}
var age2 = prompt('Specify your age:');
checkAgeTwo(age2);

function checkMin(a,b) {
    if(a<b) {
        return a;
    } else {
        return b;
    }
}

checkMin(2, 5);
checkMin(3, -1);
checkMin(1, 1);


function pow(x,n) {
    var i;

    for (i = 1; i < n; i++) {
        x = x * x;
    }
    alert(x);
}

pow(3, 2);
pow(3, 3);
pow(1, 100);


var user = {};

user.name = "����";
user.surname = "������";

user.name = "������";

delete user.name;