/**
 * Created by Garbovskiy on 09.07.2015.
 */

arr = [1,5,6,7,8,9,10];


function suffle(arr) {
    return Math.random() - 0.5;
}


arr.sort(suffle);

console.log(arr);