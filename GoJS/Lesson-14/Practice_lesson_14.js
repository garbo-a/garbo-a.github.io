/**
 * Created by Garbovskiy on 28.07.2015.
 */

function NameMe(first, last) {
    var self = this;
    self.firstName = first;
    self.lastName = last;
    self.name = self.firstName + ' ' + self.lastName;
}


Array.prototype.reverse = function () {
    var result = [];
    for (var i = this.length - 1; i >= 0; i--) {
        result.push(this[i]);
    }
    return result;
};

[1, 2, 3].reverse();

Array.prototype.reverse = function () {
    var result = [];
    for (var i = this.length - 1; i >= 0; i--) {
        result.push(this[i]);
    }
    this.length = 0;
    for (var j = 0; j < result.length; j++) {
        this.push(result[j]);
    }
    return this;
};
var arr = [1, 2, 3];
arr.reverse();
console.log(arr);


var Ghost = function () {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
};

var newGhost = new Ghost();

newGhost.color;



//////////////////
var instance;
var Singleton = function () {


    if (!instance) {
        instance = {};
    }
    return instance;

};

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2);
console.log(obj2.test);
console.log(obj1.test);

