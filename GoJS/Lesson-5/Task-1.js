/**
 * Created by Garbovskiy on 27.06.2015.
 */
////////////////// ���� 5 - ������� 1 - ������������ �������� � �������
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

function maxTaskCompl(obj) {
    var min = 0;
    for (var key in obj) {
        if (obj[key] > min) {
            min = obj[key];
        }
    }
    return min;
}

console.log(maxTaskCompl(tasksCompleted));

///////////////////////// ���� 5 - ������� 2 �������� ������� multiplyNumeric ������� ��������� �� ���� ������ � ���������� ������ � ������� ��� �������� �������� � ������� �������� �� 2.

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (!isNaN(obj[key])) obj[key] *= 2;
    }
}

multiplyNumeric(image);
console.log(image);

///////////////////////// ���� 5 - ������� 3
var arr = [];

do {
    var a = +prompt("insert number");
    if (!a && a != 0) break;
    arr.push(a);
} while (!isNaN(a));