/**
 * Created by Garbovskiy on 27.06.2015.
 */
//////////// Lesson 6 - Task 1 �������� ������� removeClass(obj, cls), ������� ������� ����� cls, ���� �� ����:
var obj = {
    className: 'open menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
        }
    }
    obj.className = arr.join(' ')
}


removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // ��� ���������

///////////// Lesson 6 - Task 2  ���� ������ ����� arr. �������� ������ arrSorted � �� ��� �� ���������, �� ���������������.
var array = ['HTML', 'JavaScript', 'CSS'];

var newArr = array.concat();

newArr.sort();

console.log(newArr);

///////////// Lesson 6 - Task 3 ���������� ������������� ������ � ��������� ������� ��������� ����� sort.

var arrRandSort = [1, 2, 3, 4, 5];

function arraySort(a, b) {
    return Math.random() - 0.5;
}

arrRandSort.sort(arraySort);

console.log(arr); // �������� � ��������� �������, �������� [3,5,1,2,4]

///////////// Lesson 6 - Task 4  �������� ���, ������� ����������� ������ �������� people �� ���� age.

var vasya = {name: '����', age: 23};
var masha = {name: '����', age: 18};
var vovochka = {name: '�������', age: 6};

var people = [vasya, masha, vovochka];

function ageSort(a, b) {
    return a.age - b.age;
}

people.sort(ageSort);

// ������ people: [vovochka, masha, vasya]
console.log(people[0].age);// 6

///////////// Lesson 6 - Task 5 ���������� �������� ������� isPal(string) ������� ���������� true ��� false � ����������� �� ���� �������� �� ������ ����������� ��� ���.

var strPal = 'amama';
function isPal (str) {
    var newStr = str.split('').reverse().join('');
    return newStr === str;
}

console.log(isPal(strPal));

///////////// Lesson 6 - Task 6 �������� ������� unique(arr), ������� ���������� ������, ���������� ������ ���������� �������� arr (arr � ������ �����).

function unique(arr) { // ��� �� ��������� - ���� ����������� ���������
    var result = [];

    nextInput:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i]; // ��� ������� ��������
            for (var j = 0; j < result.length; j++) { // ����, ��� �� �� ���?
                if (result[j] == str) continue nextInput; // ���� ��, �� ���������
            }
            result.push(str);
        }

    return result;
}

var strings = ["������", "������", "����", "����",
    "����", "����", "������", "������", "8-()"
];

alert( unique(strings) ); // ������, ����, 8-()

///////////// Lesson 6 - Task 7 �������� ������� anClean(arr), ������� ���������� ������ ����, ��������� �� ��������.

var arr = ['���', '������', '������', '���', '������', '������', '������'];

function anClean(arr) {
    var object = {};
    for (var i = 0; i < arr.length; i++) {
        var an = arr[i].split('').sort().join('').toLowerCase();
        object[an] = arr[i];
    }
    var cleanAnArr = [];
    for ( var key in object) {
        cleanAnArr.push(object[key]);
    }
    return cleanAnArr;
}

console.log( anClean(arr) ); // '���,������,������' ��� '���,������,������'