var arr = process.argv,
    summ = 0;

for ( var i = 2; i < arr.length; i++ ) {
    summ += +arr[i];
}

console.log(summ);

