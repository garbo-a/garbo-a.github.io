/**
 * Created by Gues on 06.08.2015.
 */
function Slider(selector, options) {
    var self = this;

    // DOM Nodes:
    var sliderNode = document.querySelector('.slider');
    var sliderImagesNode = document.querySelector('.slider__images-wrap');
    var prevSlideNode = document.querySelector('.slider__pager_previous');
    var nextSlideNode = document.querySelector('.slider__pager_next');
    var paginatorNode = document.querySelector('.slider__pagination');

    // Local variables:
    var currentSlideIndex = options.currentSlideIndex || 0;
    var imagesCount = sliderImagesNode.children.length;
    var imageWidth = sliderImagesNode.offsetWidth;

    // Methods:
    self.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) return currentSlideIndex = 0;
        currentSlideIndex++;
    };

    self.prevSlide = function () {
        if (currentSlideIndex === 0) return;
        currentSlideIndex--;
    };

    self.__render = function () {
        console.log(currentSlideIndex);
        // Arrow visibility
        sliderImagesNode.style.marginLeft = -(currentSlideIndex * imageWidth) + 'px';
        if (currentSlideIndex === 0) {
            prevSlideNode.style.visibility = 'hidden';
        }
        else {
            prevSlideNode.style.visibility = ''
        }

        paginatorNode.querySelector('.active').classList.remove('active');
        paginatorNode
            .children[currentSlideIndex]
            .querySelector('a')
            .classList
            .add('active');
    };

    nextSlideNode.onclick = function () {
        self.nextSlide();
        self.__render();
    };

    prevSlideNode.onclick = function () {
        self.prevSlide();
        self.__render();
    };

    paginatorNode.onclick = function (event) {
        var link = event.target;
        if (link.tagName !== "A") return;
        currentSlideIndex = +link.dataset.slider__item;
        self.__render();
    };

    self.__render();
    sliderImagesNode.style.transition = 'margin-left ease-in-out .5s';

    if (options.changeInterval) {

        var timerId;
        var startAutoSlide = function () {
            prevSlideNode.style.display = 'none';
            nextSlideNode.style.display = 'none';
            timerId = setInterval(function () {
                self.nextSlide();
                self.__render();
            }, options.changeInterval);
        };

        startAutoSlide();

        sliderNode.onmousemove = function () {
            prevSlideNode.style.display = '';
            nextSlideNode.style.display = '';
            clearInterval(timerId);
        };

        sliderNode.onmouseout = function () {
            startAutoSlide();
        }
    }
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var $jQ = jQuery.noConflict();
$jQ(".mktoButton").click(function () {
        setCookie("form_complete", 1);
        $jQ("#mktoForm_5%").submit();
    }
);

