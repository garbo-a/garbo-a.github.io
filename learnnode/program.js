
//----- 3. My first I/O ------

//var arr = process.argv[2],
//    fs = require('fs');
//
//var buf = fs.readFileSync(arr);
//var str = buf.toString();
//var arr = str.split('\n');
//var summ = arr.length - 1;
//
//console.log(summ);

//----- 4. My first Async I/O ------

//var fs = require('fs'),
//    file = process.argv[2];
//
//fs.readFile(file, function (err, data) {
//    // fs.readFile(file, 'utf8', callback) can also be used
//    if (err) {
//        throw new Error;
//    };
//    var lines = data.toString().split('\n').length - 1;
//    console.log(lines);
//});

//----- 5. Filtered LS ------

//var fs = require('fs'),
//    path = require('path'),
//    file = process.argv[2],
//    ext = '.md';
//
//
//fs.readdir(file, function (err, list ) {
//    if (err) {
//        throw new Error;
//    }
//    // My method:
//    //list.filter(function(a) {
//    //    if ( a.indexOf(ext) > -1 ) console.log(a);
//    //});
//    list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//            console.log(file)
//    });
//
//});

//----- 6. Make it modular ------

var fs = require('fs'),
    path = require('path'),
    module = require('./mymodule.js');
    file = process.argv[2],



fs.readdir(file, function (err, list ) {
    if (err) {
        throw new Error;
    }

    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    });

});