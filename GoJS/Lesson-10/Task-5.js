/**
 * Created by Garbovskiy on 09.07.2015.
 */

str = 'the quickgfdgdfggrtgrtgtrgrt browndfdf foxdfgfdgdrfgfg';
var words = str.split(' ');

var biggestWord = words.sort(function(a,b) {
    return a.length - b.length;
}).slice(-1);

console.log(biggestWord);