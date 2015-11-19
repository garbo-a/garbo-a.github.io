///**
// * Created by Garbovskiy on 10.07.2015.
// */
//var http = require('http');
//var static = require('node-static');
//var file = new static.Server('.');
//
//http.createServer(function(req, res) {
//    file.serve(req, res);
//}).listen(8080);
//
//console.log('Server running on port 8080');
//
//var quarter = function (number) {
//    return number/4;
//};
//
//
//var condition = quarter (36);
//
//
//if (condition % 3 === 0 ) {
//    console.log("The statement is true");
//} else {
//    console.log("The statement is false");
//}

function fn (i) {
    console.log(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(fn.bind(null, i), 0);
}
