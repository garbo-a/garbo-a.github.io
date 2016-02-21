function bufferConstr () {
    let buffer = '1 ';

    return function (data) {
        if (arguments.length === 0) {
            console.log(buffer);
        }
        buffer += data;
    }
}

let newBuffer = bufferConstr();

let secondBuffer = bufferConstr();

newBuffer('dog');
newBuffer();

secondBuffer('Cat');
secondBuffer();
