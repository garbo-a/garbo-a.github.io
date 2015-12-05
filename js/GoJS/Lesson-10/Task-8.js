var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

function classClean(array) {
    var frequency = {};
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        if(!frequency[word]){
            frequency[word] = 1;
        } else {
            frequency[word]++;
        }
    }

    return Object.keys(frequency).sort(function(a,b){
        return frequency[b] - frequency[a];
    })
}

 console.log(classClean(arr)) ;