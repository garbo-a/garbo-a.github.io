/**
 * Created by Garbovskiy on 16.07.2015.
 */
/* �������� �������� defer � �����������
 ��������: 4�������
 �������� ���� �������� � �������� ����� defer(ms), ������� ���������� ������, ������������� ����� ������� �� ms �����������.*/

Function.prototype.defery = function (ms) {
    var self = this;
    return function () {
        var arg = arguments;
        setTimeout(function () {
            self.apply(self, arg)
        }, ms)
    };
};


function fn(a, b, c) {
    console.log(a + b + c*2);
}

fn.defery(1000)(1, 2, 3);
