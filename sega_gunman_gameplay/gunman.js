function Gunman() {
    //Local variables
    var pathGunmanCounter = -100,
        bcgGunmanCounter = 0,
        gunmansArr = [{bgPosY: 0, timer: 1.00, reward: 100}, {bgPosY: -206, timer: 0.80, reward: 150}, {
            bgPosY: -412,
            timer: 0.70,
            reward: 200
        }, {
            bgPosY: -618,
            timer: 0.65, reward: 250
        }, {bgPosY: -824, timer: 0.59, reward: 300}, {timer: 0.59, reward: 0}],
        globalCounter = 0,
        gunman = document.body.querySelector('.gunman'),
        fire = document.body.querySelector('.fire'),
        ready = document.querySelector('.ready'),
        win = document.querySelector('.win'),
        winBg = document.querySelector('.win__bg'),
        loose = document.querySelector('.loose'),
        playerTime = document.querySelector('.your__time span'),
        gunmanTime = document.querySelector('.gunman__time span'),
        reward = document.querySelector('.amount__reward span'),
        audio_intro = document.querySelector('.intro'),
        audio_death = document.querySelector('.death'),
        audio_fire = document.querySelector('.fire'),
        audio_shot = document.querySelector('.shot'),
        audio_shot_fall = document.querySelector('.shot-fall'),
        audio_wait = document.querySelector('.wait'),
        audio_win = document.querySelector('.win'),
        gunmanTimeCount,
        date,
        playerDate,
        playerTimeCount,
        rewardSum = 0,
        bgPosX = -290,
        timerIdLoose1,
        timerIdLoose2,
        self = this;

    //Timers
    self.gunManOnPosition = function () {
        //AudioPlay(audio_win);
        var timerId;
        console.log(gunman.style.backgroundPositionX);
        gunman.classList.toggle('active');
        gunman.style.backgroundPositionY = gunmansArr[globalCounter].bgPosY + 'px';
        gunmanTime.innerHTML = '';

        timerId = setInterval(function () {
            pathGunmanCounter += 18;
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
            AudioStop(audio_intro);
        }, 5000);
    };

    function AudioPlay(audio) {
        audio.autoplay = true;
        audio.loop = true;
    }

    function AudioStop(audio) {
        audio.autoplay = false;
        audio.loop = false;
    }

    //function AudioPlayOnce (audio) {
    //    AudioPlay(audio);
    //    setTimeout(AudioStop(audio), 500);
    //}

    //Fire gameplay
    function Fire() {
        gunmanTimeCount = gunmansArr[globalCounter].timer;
        ready.classList.toggle('active');
        gunmanTime.innerHTML = gunmanTimeCount + '';
        AudioPlay(audio_win);
        setTimeout(function () {
            ready.classList.toggle('active');
            fire.classList.toggle('active');
            playerTimeCounter();
            gunman.addEventListener('click', ShootGamePlay);
            timerIdLoose1 = setTimeout(function () {
                gunman.removeEventListener('click', ShootGamePlay);
                LooseRender();
                gunman.addEventListener('click', LooseShootTime);
                timerIdLoose2 = setTimeout(function () {
                    gunman.removeEventListener('click', LooseShootTime);
                    Loose();
                    playerTime.innerHTML = 'infinity!'
                }, 3000)
            }, gunmansArr[globalCounter].timer * 1000);
        }, 3000)
    }

    function playerTimeCounter() {
        date = +new Date();
    }

    function ShootGamePlay() {

        clearTimeout(timerIdLoose1);
        clearTimeout(timerIdLoose2);
        playerDate = +new Date();
        playerTimeCount = (playerDate - date) / 1000;
        playerTime.innerHTML = playerTimeCount.toFixed(2) + '';
        fire.classList.toggle('active');
        gunman.removeEventListener('click', ShootGamePlay);

        if (playerTimeCount < gunmanTimeCount) {
            WinRender();
            setTimeout(function () {
                Win();
            }, 1500);
        } else {
            LooseRender();
            setTimeout(function () {
                Loose();
            }, 1500);
        }
    }

    function LooseShootTime() {
        clearTimeout(timerIdLoose2);
        playerDate = +new Date();
        playerTimeCount = (playerDate - date) / 1000;
        playerTime.innerHTML = playerTimeCount.toFixed(2) + '';
        fire.classList.toggle('active');
        gunman.removeEventListener('click', LooseShootTime);
        Loose();
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
            if (globalCounter === 5) {
                for (var i = 0; i < 6; i++) {
                    winBg.classList.toggle('active');
                }
                console.log(rewardSum);
                console.log(gunman.style.backgroundPositionX);
                console.log(gunman.style.backgroundPositionY);
                return;
            }
            pathGunmanCounter = -100;
            setTimeout(function () {
                win.classList.toggle('active');
                gunman.classList.toggle('active');
                self.gunManOnPosition();
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

    function WinRender() {
        bgPosX = -676;
        var posStep = -97;
        var timerId = setInterval(function () {
            bgPosX += posStep;
            gunman.style.backgroundPositionX = bgPosX + 'px';
        }, 300);
        setTimeout(function () {
            clearInterval(timerId);
            bgPosX = -290;
        }, 1000);
        setTimeout(function () {
            gunman.style.backgroundPositionX = 100 + 'px';
        }, 4000);
    }

    function LooseRender() {
        bgPosX = -289;
        var posStep = -97;
        var timerId = setInterval(function () {
            bgPosX += posStep;
            gunman.style.backgroundPositionX = bgPosX + 'px';
        }, 300);
        setTimeout(function () {
            clearInterval(timerId);
            bgPosX = -290;
        }, 1300);
    }
}