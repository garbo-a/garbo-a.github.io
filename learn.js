/**
 * Created by aleksandrgarbovskij on 1/27/16.
 */

const obj1 = {bonus: 10},
    obj2 = {bonus: 35},
    obj3 = {bonus: 15};

function bonusMultiply () {
    var result = 0;
    for(var i = 0; i < arguments.length; i++ ) {
        result += arguments[i].bonus;
    }
    console.log( result * 2 );

}

//bonusMultiply(obj1, obj2, obj3, {bonus: 100});

function LazyArrayz () {

    this.katyaDontWantToLearn = function() {
       console.log('Go to the bad!')
    }
}

function BusyArrayz () {
    LazyArrayz.call(this);

    this.katyWantToLearn = function () {
        console.info('Katya want to learn!');
    }

}



var ar = new BusyArrayz();

ar.katyaDontWantToLearn();
ar.katyWantToLearn();



arr = [1,2,3,4,5];

var result = [];

arr.reduce(function(prevVal, currentItem) {
    result.push(prevVal);

    return prevVal + currentItem;
}, 0);















































