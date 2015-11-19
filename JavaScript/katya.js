var closure = 3,
    twoMultiply = multiply(1, 10);

console.log(twoMultiply);


function multiply() {
    return arguments[0] > 0 ? arguments[1] * closure : arguments[0];
}

var multy = function (arg) {
    return arg * arg;
};


var arr = [1 , 'string', true];

arr[0];
arr[1];
arr.length;