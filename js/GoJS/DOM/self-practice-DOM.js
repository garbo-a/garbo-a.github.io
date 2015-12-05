(function () {
    var css = 'a[href*="://"]:not([href^="http://internal.com"])';
    var links = document.querySelectorAll(css);

    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('external');
    }
})();

function User() {
    var firstName;
    var lastName;

    this.setFirstName = function (newFirstName) {
        firstName = newFirstName;
    };

    this.setLastName = function (newLastName) {
        lastName = newLastName;
    };

    this.getFullName = function () {
        return firstName + ' ' + lastName;
    }

}

/* Запускать только при включённой кофеварке
 В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
 В итоге должен работать такой код: */
function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;

    this.setEnabled = function () {
        self._enabled = true;
    };

    this.setDisabled = function () {
        self._enabled = false;
    }
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    this.run = function () {
        setTimeout(function () {
            if (!this._enabled) {
                console.log('Error! The machine is disabled!');
            } else {
                console.log('Coffee is ready!')
            }
        }, 2000)
    }
}

var philips3000 = new CoffeeMachine(10000);
philips3000.setEnabled();
philips3000.run();
philips3000.setDisabled();

function Fridge(power) {
    Machine.apply(this, arguments);
    this._food = [];
    var maxFood = power / 100;
    var parentDisable = this.setDisabled();

    this.setDisabled = function () {
        if (this._food.length) {
            throw new Error ('The fridge is not empty!');
        }
        parentDisable();
    };

    this.getFood = function () {
        return this._food.slice();
    };
    this.addFood = function () {
        if (!this._enabled) {
            throw new Error('Error! The vestfrost is disabled!');
        } else {
            if (arguments.length + this._food.length > maxFood) {
                throw new Error("Can not be loaded more than " + maxFood + " the power is not enough")
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    this._food.push(arguments[i]);
                }
            }
        }
    };
    this.removeFood = function (item) {
        var indexElem = this._food.indexOf(item);
        if (indexElem != -1) this._food.splice(indexElem, 1);
    };
    this.filterFood = function (func) {
        return this._food.filter(func);

    };
}

var vestfrost = new Fridge(500);
vestfrost.setEnabled();

vestfrost.addFood({
    title: "котлета",
    calories: 100
});
vestfrost.addFood({
    title: "сок",
    calories: 30
});
vestfrost.addFood({
    title: "зелень",
    calories: 10
});
vestfrost.addFood({
    title: "варенье",
    calories: 150
});

var dietItems = vestfrost.filterFood(function(item) {
    return item.calories < 50;
});

vestfrost.removeFood("нет такой еды"); // без эффекта
alert( vestfrost.getFood().length ); // 4

dietItems.forEach(function(item) {
    alert( item.title ); // сок, зелень
    vestfrost.removeFood(item);
});

alert( vestfrost.getFood().length );

var liebherr = new Fridge(600);
liebherr.setEnabled();
liebherr.addFood('хлеб');
liebherr.setDisabled();

