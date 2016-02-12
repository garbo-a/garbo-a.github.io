'use strict';

function bufferConstr() {
    var buffer = '1 ';

    return function (data) {
        if (arguments.length === 0) {
            console.log(buffer);
        }
        buffer += data;
    };
}

var newBuffer = bufferConstr();

var secondBuffer = bufferConstr();

newBuffer('dog');
newBuffer();

secondBuffer('Cat');
secondBuffer();

//# sourceMappingURL=learn-scope-compiled.js.map