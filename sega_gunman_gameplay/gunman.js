function Gunman() {
    //Local variables
    var pathGunmanCounter = -100,
        bgGunmanCounter = 0,
        gunmansArr = [
            {bgPosY: 0, timer: 1.00, reward: 100},
            {bgPosY: -206, timer: 0.80, reward: 150},
            {bgPosY: -412, timer: 0.70, reward: 200},
            {bgPosY: -618, timer: 0.65, reward: 250},
            {bgPosY: -824, timer: 0.59, reward: 300},
            {timer: 0.59, reward: 0}
        ],
        MAX_PLAY = 5,
        globalCounter = 0,
        gunman = document.body.querySelector('.gunman'),
        Bubbles = {
            fire: document.body.querySelector('.bubble__fire'),
            win: document.querySelector('.bubble__win'),
            ready: document.querySelector('.bubble__ready')
        },
        gameOver = document.querySelector('.game__over'),
        winBg = document.querySelector('.win__bg'),
        playerTime = document.querySelector('.your__time span'),
        gunmanTime = document.querySelector('.gunman__time span'),
        reward = document.querySelector('.amount__reward span'),
        Audio = {
            audioIntro: document.querySelector('.sound__intro'),
            audioDeath: document.querySelector('.sound__death'),
            audioFire: document.querySelector('.sound__fire'),
            audioShot: document.querySelector('.sound__shot'),
            audioShot_Fall: document.querySelector('.sound__shot-fall'),
            audioWait: document.querySelector('.sound__wait'),
            audioWin: document.querySelector('.sound__win')
        },
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
        audioPlay(Audio.audioIntro);
        var timerId;
        console.log(gunman.style.backgroundPositionX);
        gunman.classList.toggle('active');
        gunman.style.backgroundPositionY = gunmansArr[globalCounter].bgPosY + 'px';
        gunmanTime.innerHTML = '';

        timerId = setInterval(function () {
            pathGunmanCounter += 18;
            gunman.style.right = pathGunmanCounter + 'px';
            playerTime.innerHTML = '';

            switch (bgGunmanCounter) {
                case 0:
                    gunman.style.backgroundPositionX = bgGunmanCounter + 'px';
                    bgGunmanCounter -= 97;
                    break;

                case -97:
                    gunman.style.backgroundPositionX = bgGunmanCounter + 'px';
                    bgGunmanCounter -= 97;
                    break;

                case -194:
                    gunman.style.backgroundPositionX = bgGunmanCounter + 'px';
                    bgGunmanCounter += 194;
                    break;
            }
        }, 200);

        setTimeout(function () {
            clearInterval(timerId);
            gunman.style.backgroundPositionX = bgPosX + "px";
            firePlay();
            globalCounter++;
            audioStop(Audio.audioIntro);
        }, 5000);
    };

    function audioPlay(audio) {
        audio.play();
    }

    function audioStop(audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    //Fire gameplay
    function firePlay() {
        gunmanTimeCount = gunmansArr[globalCounter].timer;
        Bubbles.ready.classList.toggle('active');
        gunmanTime.innerHTML = gunmanTimeCount + '';
        setTimeout(function () {
            audioPlay(Audio.audioWait)
        }, 1200);
        setTimeout(function () {
            audioPlay(Audio.audioFire);
        }, 2600);
        setTimeout(function () {
            Bubbles.ready.classList.toggle('active');
            Bubbles.fire.classList.toggle('active');
            //
            playerTimeCounter();
            gunman.addEventListener('click', shootGamePlay);
            timerIdLoose1 = setTimeout(function () {
                gunman.removeEventListener('click', shootGamePlay);
                looseRender();
                gunman.addEventListener('click', looseShootTime);
                timerIdLoose2 = setTimeout(function () {
                    gunman.removeEventListener('click', looseShootTime);
                    looseGamePlay();
                    playerTime.innerHTML = 'infinity!'
                }, 2000)
            }, gunmansArr[globalCounter].timer * 1000);
        }, 3000)
    }

    function playerTimeCounter() {
        date = new Date();
    }

    function shootGamePlay() {
        audioPlay(Audio.audioShot);
        clearTimeout(timerIdLoose1);
        clearTimeout(timerIdLoose2);
        playerDate = new Date();
        playerTimeCount = (playerDate - date) / 1000;
        playerTime.innerHTML = playerTimeCount.toFixed(2) + '';
        Bubbles.fire.classList.toggle('active');
        gunman.removeEventListener('click', shootGamePlay);

        if (playerTimeCount < gunmanTimeCount) {
            winRender();
            setTimeout(function () {
                winGamePlay();
            }, 1500);
        } else {
            looseRender();
            setTimeout(function () {
                looseGamePlay();
            }, 1500);
        }
    }

    function looseShootTime() {
        clearTimeout(timerIdLoose2);
        playerDate = +new Date();
        playerTimeCount = (playerDate - date) / 1000;
        playerTime.innerHTML = playerTimeCount.toFixed(2) + '';
        Bubbles.fire.classList.toggle('active');
        gunman.removeEventListener('click', looseShootTime);
        looseGamePlay();
    }

    function winGamePlay() {
        Bubbles.win.classList.toggle('active');
        rewardSum += gunmansArr[globalCounter].reward;
        reward.innerHTML = rewardSum + '';
        console.log('win');
        var timerIdWin = setInterval(function () {
            winBg.classList.toggle('active')
        }, 120);
        setTimeout(function () {
            clearInterval(timerIdWin);
            if (globalCounter === MAX_PLAY) {
                for (var i = 0; i < 6; i++) {
                    winBg.classList.toggle('active');
                }
                audioPlay(Audio.audioWin);
                return;
            }
            pathGunmanCounter = -100;
            setTimeout(function () {
                Bubbles.win.classList.toggle('active');
                gunman.classList.toggle('active');
                self.gunManOnPosition();
            }, 2500);
        }, 1000);
    }

    function looseGamePlay() {
        var timerIdLoose = setInterval(function () {
            gameOver.classList.toggle('active')
        }, 280);
        setTimeout(function () {
            clearInterval(timerIdLoose);
        }, 1000);
        console.log('loose');
    }

    function winRender() {
        audioPlay(Audio.audioShot_Fall);
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

    function looseRender() {
        audioPlay(Audio.audioDeath);
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