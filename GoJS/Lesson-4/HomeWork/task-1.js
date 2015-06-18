/**
 * Created by Garbovskiy on 17.06.2015.
 */
//
//������������������ ����� ��������� ����������� �� ������� ������� F(n) = F(n-1) + F(n-2). � ��� ������ ��������� ����� ����������� ��� ����� ���� ����������. ������ ��� ����� ����� 1 � 1.
//
//�������� ������� fib(n), ������� ���������� n-� ����� ���������.

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

//�������� ������� checkSpam ������� ��������� ������ �� ���������� ����: spam, sex.

function checkSpam(str){

    return ~str.toLowerCase().indexOf('spam') || ~str.toLowerCase().indexOf('sex') ? true : false;
}

checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false

//�������� �������, ������� ��������� �� ���� ������ � ���������� �� ���������� ���� �� ����� �� ��������� 20 ��������. ���� ������ ������ 20, �� �������� ������ � ��������� � ����� ������ '...'

function checkStrLength(str) {
    return str.length <= 20 ? str : str.slice(0, 17) + '...';
}

checkStrLength("ajhsfklh sdfhkljsdhf kjshdfkjh");