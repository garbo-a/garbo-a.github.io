/**
 * Created by Garbovskiy on 16.07.2015.
 */

function User() {
    var firstName = '';
    var surname = '';
    var self = this;

    self.setFirstName = function (newFirstName) {
        firstName = newFirstName;
    };
    self.setSurname = function (newSurname) {
        surname = newSurname;
    };
    self.getFullName = function () {
        return firstName + ' ' + surname;
    }
}

var user = new User();
user.setFirstName('Петя');
user.setSurname('Ivanov');

console.log(user.getFullName());

/* Добавить геттер для power
 Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки. */

function CoffeMachine (power, capacity) {
    var waterAmount;


    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error ('Amount should be > 0');
        }
        if (amount > capacity) {
            throw new Error ("You can't fill more water than capacity");
        }
        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };

    this.getPower = function () {
        return power;
    }
}

var coffeMachine = new CoffeMachine(1000, 800);

console.log(coffeMachine.getPower());



