// Create function sumArgs which sum all its arguments
// Borrowing method
function sumArgs() {
    arguments.reduce = [].reduce;

    return arguments.reduce(function (a, b) {
        return a + b;
    });

}

alert(sumArgs(1, 2, 3));

// Call method


function sumArgs() {

    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });

}

alert(sumArgs(1, 2, 3));

////////////// Decorating function so it can console.log arguments and result

var sum = function (a, b) {return a + b;};

var sayHello = function (str) {return str;};

function makeLogger(fn) {
    return function() {
        console.log(Array.prototype.join.apply(arguments) + ' = ' + fn.apply(this, arguments));
    };
}

sum = makeLogger(sum);
sayHello = makeLogger(sayHello);

sum(10, 20) ;
sayHello('Oleksandr');