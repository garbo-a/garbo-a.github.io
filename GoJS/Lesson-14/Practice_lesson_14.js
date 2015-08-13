/**
 * Created by Garbovskiy on 28.07.2015.
 */

function NameMe(first, last) {
    var self = this;
    self.firstName = first;
    self.lastName = last;
    self.name = self.firstName + ' ' + self.lastName;
}


Array.prototype.reverse = function () {
    var result = [];
    for (var i = this.length - 1; i >= 0; i--) {
        result.push(this[i]);
    }
    return result;
};

[1, 2, 3].reverse();

Array.prototype.reverse = function () {
    var result = [];
    for (var i = this.length - 1; i >= 0; i--) {
        result.push(this[i]);
    }
    this.length = 0;
    for (var j = 0; j < result.length; j++) {
        this.push(result[j]);
    }
    return this;
};
var arr = [1, 2, 3];
arr.reverse();
console.log(arr);


var Ghost = function () {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
};

var newGhost = new Ghost();

newGhost.color;



//////////////////
var instance;
var Singleton = function () {

    if (!instance) {
        instance = {};
    }
    return instance;

};

var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2);
console.log(obj2.test);
console.log(obj1.test);





//////////////////////////////////////////
/////////////////////////////////////////
///////////////////////////////////////


function Notification(options) {
    var self = this;
    //DOM nodes
    var div = document.createElement('div');
    var parentElem = document.body;
    div.style.display = "block";
    div.style.width = "200px";
    div.style.background = "orange";
    div.style.position = "absolute";

    //Local variables
    var counter = 1;
    //Methods

    parentElem.appendChild(div);
    // or
    // parentElem.insertBefore(div, parentElem.children[1]);
    // parentElem.insertBefore(div, null);

    div.style.top = options.top + "px";
    div.style.right = options.right + "px";

    div.classList.add("notification");

    this.addClassActive = function () {
        div.classList.add("active");
        div.innerHTML = options.html + counter + " раз";
        counter++;
    };
    this.removeClassActive = function () {
        div.classList.remove("active");
    };
    setInterval(function () {
        self.addClassActive();
        setTimeout(function () {
            self.removeClassActive();
        }, 1500)
    }, 3000);

}

//<script src="notification.js"></script>
//    <script>
//    new Notification({
//        top: 100,
//        right: 100,
//        html: "Вы прочитали это сообщение ",
//        className: "notification"
//    });
//
//</script>