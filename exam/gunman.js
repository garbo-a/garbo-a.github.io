function Gunman() {
    //Local variables
    var pathGunmanCounter = -100; //in the end set -100px
    var bcgGunmanCounter = 0;
    var gunmansArr = [{bgPosY: 0, timer: 1, reward: 100}, {bgPosY: -206, timer: 0.8, reward: 150}, {
        bgPosY: -412,
        timer: 0.7,
        reward: 200
    }, {
        bgPosY: -618,
        timer: 0.65, reward: 250
    }, {bgPosY: -824, timer: 0.59, reward: 300}];
    var globalCounter = 0;
    var gunman = document.body.querySelector('.gunman'),
        fire = document.body.querySelector('.fire'),
        ready = document.querySelector('.ready'),
        win = document.querySelector('.win'),
        winBg = document.querySelector('.win__bg'),
        loose = document.querySelector('.loose'),
        playerTime = document.querySelector('.your__time span'),
        gunmanTime = document.querySelector('.gunman__time span'),
        reward = document.querySelector('.amount__reward span'),
        gunmanTimeCount,
        date,
        playerDate,
        playerTimeCount,
        rewardSum = 0,
        bgPosX = -290;
        self = this;


    //Timers
    self.gunManOnPosition = function () {
        var timerId;
        gunman.style.backgroundPositionY = gunmansArr[globalCounter].bgPosY + 'px';
        gunmanTime.innerHTML = '';

        timerId = setInterval(function () {
            pathGunmanCounter += 10;
            gunman.style.right = pathGunmanCounter + 'px';
            playerTime.innerHTML = '';

            switch (bcgGunmanCounter) {
                case 0:
                    gunman.style.backgroundPositionX = bcgGunmanCounter + 'px';
                    bcgGunmanCounter -= 97;
                    break;

                case -97:
                    gunman.style.backgroundPositionX = bcgGunmanCounter + 'px';
                    bcgGunmanCounter -= 97;
                    break;

                case -194:
                    gunman.style.backgroundPositionX = bcgGunmanCounter + 'px';
                    bcgGunmanCounter += 194;
                    break;
            }
        }, 200);

        setTimeout(function () {
            clearInterval(timerId);
            gunman.style.backgroundPositionX = bgPosX + "px";
            Fire();
            globalCounter++;
        }, 9000);
    };


    //Fire gameplay
    function Fire() {
        gunmanTimeCount = gunmansArr[globalCounter].timer;

        ready.classList.toggle('active');
        gunmanTime.innerHTML = gunmanTimeCount + '';


        setTimeout(function () {
            ready.classList.toggle('active');
            fire.classList.toggle('active');
            playerTimeCounter();
            gunman.addEventListener('click', ShootGamePlay);
        }, 3000)
    }


    function playerTimeCounter() {
        date = +new Date();
    }


    function ShootGamePlay() {
        playerDate = +new Date();
        playerTimeCount = (playerDate - date) / 1000;
        playerTime.innerHTML = playerTimeCount.toFixed(2) + '';
        fire.classList.toggle('active');
        gunman.removeEventListener('click', ShootGamePlay);

        if (playerTimeCount < gunmanTimeCount) {
            WinRender();
            Win();
        } else {
            LooseRender();
            Loose();
        }
    }

    function Win() {
        win.classList.toggle('active');
        rewardSum += gunmansArr[globalCounter].reward;
        reward.innerHTML = rewardSum + '';
        console.log('win');

        var timerIdWin = setInterval(function () {
            winBg.classList.toggle('active')
        }, 120);
        setTimeout(function () {
            clearInterval(timerIdWin);
            if (globalCounter === 5) return;
            pathGunmanCounter = -100;
            setTimeout(function () {
                win.classList.toggle('active');
                setTimeout(function () {
                    self.gunManOnPosition();
                }, 200)
            }, 2500);
        }, 1000);
    }

    function Loose() {
        var timerIdLoose = setInterval(function () {
            loose.classList.toggle('active')
        }, 280);
        setTimeout(function () {
            clearInterval(timerIdLoose);
        }, 1000);
        console.log('loose');
    }

    function WinRender () {
        bgPosX = -676;
        var posStep = -97;
        var timerId = setInterval(function() {
            bgPosX += posStep;
            gunman.style.backgroundPositionX = bgPosX + 'px' ;
            console.log(gunman.style.backgroundPositionX);
        }, 300);
        setTimeout(function () {
            clearInterval(timerId);
            bgPosX = -290;
        }, 1000);
    }

    function LooseRender () {
        bgPosX = -289;
        var posStep = -97;
        var timerId = setInterval(function() {
            bgPosX += posStep;
            gunman.style.backgroundPositionX = bgPosX + 'px' ;
            console.log(gunman.style.backgroundPositionX);
        }, 300);
        setTimeout(function () {
            clearInterval(timerId);
            bgPosX = -290;
        }, 1300);
    }
}