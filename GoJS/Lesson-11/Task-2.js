/**
 * Created by Garbovskiy on 16.07.2015.
 */
/*Добавить публичный метод кофеварке
 Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
 При этом, конечно же, должны происходить все необходимые проверки — на положительность и превышение ёмкости. */

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var inProcess = false;
    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.setOnReady = function (newOnReady) {
        onReady = newOnReady;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function () {
        inProcess = true;
        setTimeout(function() {
            inProcess = false;
            onReady();

        }, getTimeToBoil());
    };

    this.addWater = function (amount) {
        this.setWaterAmount(waterAmount + amount)
    };

    this.isRunning = function() {
        return inProcess;
    }

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
    alert( "После: " + coffeeMachine.isRunning() ); // После: false
});