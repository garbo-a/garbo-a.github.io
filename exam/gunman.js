function Gunman() {
    //Local variables
    var gunman = document.body.querySelector('.gunman');
    var fire = document.body.querySelector('.fire');
    var pathGunmanCounter = -100; //in the end set -100px
    var bcgGunmanCounter = 0;
    var gunmansArr = [{bgPosY:0},{bgPosY:-206}];


    //Timers
    this.gunManOnPosition = function() {
        var timerId;
        for (var i = 0; i < gunmansArr.length; i++) {
            gunman.style.backgroundPositionY = gunmansArr[i].bgPosY + 'px';

            timerId = setInterval(function () {
                pathGunmanCounter += 10;
                gunman.style.right = pathGunmanCounter + 'px';


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
                gunman.style.backgroundPositionX = "-290px";
                Fire()
            }, 9000);
        }

    };

    function Fire (){
        document.querySelector('.fire').classList.add('active');
    }

}