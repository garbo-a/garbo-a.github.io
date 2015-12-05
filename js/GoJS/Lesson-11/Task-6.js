/**
 * Created by Garbovskiy on 16.07.2015.
 */
/* ������ � __proto__
 ��������: 5�������
 �� � ������������ �������, ������� ������������� ����, ��������� �����. ���� �� ������������� ������� ������� ������� ����� ������ (���� � "Hamster").

 �������-������ ������ ����� ������ food ��� �������� ��� � ����� found, ������� ��������� � ����.

 ���� � ��� �������. ��� �������� ���� �������, ���� ���� ���� � ������-�� ����� ���������� � ������ ����.

 � ��� ����? ��� ���������? */

function Hamster() {
    this.food = [];
}

// Hamster.prototype.food = []; // ������ "�����"

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// ������ ���� ������� � ������ �������
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("������");
speedy.found("����");

console.log ( speedy.food.length ); // 2
console.log ( lazy.food.length );