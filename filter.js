Array.prototype.duplicate = Array.prototype.duplicate || function () {
    return this.concat(this);
};

console.log([1, 2, 3, 4, 5].duplicate());


function memorizeFn(key) {
    if (memorizeFn[key]) {
        console.log('propery exists: key - ' + key + " : value - " + memorizeFn[key]);
        return key;
    } else {
        var result = key * key;
        memorizeFn[key] = result;
        return result;
    }
}

console.log(memorizeFn(2));
console.log(memorizeFn(3));
console.log(memorizeFn(4));
console.log(memorizeFn(2));
console.log(memorizeFn(3));


function Singleton() {
    var self = this;
    self.singleton = {};
    if (this.singleton) {
        return self.singleton;
    } else {
        return false;
    }
}

console.log(Singleton());
console.log(Singleton());