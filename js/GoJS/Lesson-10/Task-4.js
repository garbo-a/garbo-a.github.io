str = 'the quick brown fox';

function charBig(string) {
    var words = string.split(' ');
    var a = [];
    for (var i = 0; i < words.length; i++) {
        var arr = words[i];
        a.push( arr[0].toUpperCase() + arr.slice(1));
    }
    var result = a.join(' ');
    console.log(result);
}

charBig(str);


function theLongestWord (string) {
    var words = string.split(' ');
    var a;
    for (var i = 0; i < words.length; i++) {

    }
}

theLongestWord(str);

