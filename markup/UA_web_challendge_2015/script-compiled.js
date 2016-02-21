'use strict';

function Slider(id) {
    var arrowLeft = document.querySelector(id + ' ' + '.nav-left'),
        arrowRight = document.querySelector(id + ' ' + '.nav-right'),
        slideWrapper = document.querySelector(id),
        newWidth = slideWrapper.clientWidth,
        slideCarousel = document.querySelector(id + ' ' + '.slide__images-wrapper'),
        slideItems = document.querySelectorAll(id + ' ' + '.slide__item'),
        currentSlide = 0,
        self = this;

    var addEvent = function addEvent(object, type, callback) {
        if (object == null || typeof object == 'undefined') return;
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
        } else if (object.attachEvent) {
            object.attachEvent("on" + type, callback);
        } else {
            object["on" + type] = callback;
        }
    };

    self.sliderRender = function () {
        resizeSlides();
        setSlideItemWidth();
        arrowLeft.addEventListener('click', renderSliderLeft);
        arrowRight.addEventListener('click', renderSliderRight);
        addEvent(window, "resize", function () {
            resizeSlides();
            setSlideItemWidth();
        });
    };

    function resizeSlides() {
        newWidth = slideWrapper.clientWidth;
    }

    function setSlideItemWidth() {
        for (var i = 0; i < slideItems.length; i++) {
            slideItems[i].style.width = newWidth + 'px';
        }
    }

    function renderSliderRight() {
        arrowLeft.classList.remove('disabled');
        currentSlide += 1;
        slideCarousel.style.marginLeft = -(currentSlide * (newWidth + 1)) + 'px';
        if (currentSlide === 2) {
            arrowRight.classList.add('disabled');
            currentSlide = 1;
        }
    }

    function renderSliderLeft() {
        arrowRight.classList.remove('disabled');
        currentSlide--;
        slideCarousel.style.marginLeft = currentSlide * (newWidth + 1) + 'px';
        if (currentSlide === 0) {
            arrowLeft.classList.add('disabled');
        }
    }
}

//# sourceMappingURL=script-compiled.js.map