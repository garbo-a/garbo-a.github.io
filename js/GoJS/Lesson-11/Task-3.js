/**
 * Created by Garbovskiy on 16.07.2015.
 */
/* �������� �������� defer
 ��������: 5�������
 �������� ���� �������� � �������� ����� defer(ms), ������� ����������� ����� ������� �� ms �����������.
 */

Function.prototype.defer = function (f) {
    setTimeout(this, f);
};

function f() {
    console.log('Privet');
}

f.defer(5000);

