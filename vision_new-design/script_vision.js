function Slider(selector, options) {
    var self = this;

    // DOM Nodes:
    var sliderNode = document.querySelector('.slider__wrapper'),
        sliderImagesNode = document.querySelector('.slider__content'),
        paginatorNode = document.querySelector('nav');

    // Local variables:
    var currentSlideIndex = options.currentSlideIndex || 0;
    var imagesCount = sliderImagesNode.children.length;
    var imageWidth = sliderImagesNode.offsetWidth;

    for (var i = 0; i < imagesCount; i++) {
        sliderImagesNode.children[i].style.width = imageWidth / imagesCount - 1 + 'px';
    }

    showExpandableContent();
    // Methods:
    self.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) return currentSlideIndex = 0;
        sliderImagesNode.children[currentSlideIndex].classList.remove('active');
        currentSlideIndex++;
    };

    self.prevSlide = function () {
        if (currentSlideIndex === 0) return;
        currentSlideIndex--;
    };

    self.__render = function () {
              //console.log(currentSlideIndex);
        // Arrow visibility
        sliderImagesNode.style.marginLeft = -(currentSlideIndex * sliderImagesNode.children[0].offsetWidth) + 'px';
        //console.log(sliderImagesNode.style.marginLeft);
        //if (currentSlideIndex === 0) {
        //    prevSlideNode.style.visibility = 'hidden';
        //}
        //else {
        //    prevSlideNode.style.visibility = ''
        //}

        sliderImagesNode.children[currentSlideIndex].classList.add('active');
        paginatorNode.querySelector('.active').classList.remove('active');
        paginatorNode.children[currentSlideIndex].classList.add('active');
        showExpandableContent();
    };
//redundant
//    nextSlideNode.onclick = function () {
//        self.nextSlide();
//        self.__render();
//    };
//redundant
//    prevSlideNode.onclick = function () {
//        self.prevSlide();
//        self.__render();
//    };

    paginatorNode.onclick = function (event) {
        var link = event.target;
        if (link.tagName !== "A") return;
        sliderImagesNode.children[currentSlideIndex].classList.remove('active');
        currentSlideIndex = +link.dataset.slider__item;
        self.__render();
    };

    self.__render();
    sliderImagesNode.style.transition = 'margin-left ease-in-out .5s';

    if (options.changeInterval) {

        var timerId;
        var startAutoSlide = function () {
            //prevSlideNode.style.display = 'none';
            //nextSlideNode.style.display = 'none';
            timerId = setInterval(function () {
                self.nextSlide();
                self.__render();
            }, options.changeInterval);
        };

        startAutoSlide();

        sliderNode.onmousemove = function () {
            //prevSlideNode.style.display = '';
            //nextSlideNode.style.display = '';
            clearInterval(timerId);
        };

        sliderNode.onmouseout = function () {
            startAutoSlide();
        }
    }

    function showExpandableContent() {
        var activeItem = $('.content-item.active .btn-outline-dark');

        activeItem.click(function (e) {
            var expandableItem = $('.content-item.active .item__expandable-content'),
                backBtn = expandableItem.find('.item__expandable-back-btn');
            expandableItem.css({"display": "block"}).animate({
                opacity: "1",
                width: "100%",
                height: "90%"
            }, 250);
            backBtn.click(function (e) {
                var expandableItem = $('.content-item.active .item__expandable-content');
                expandableItem.css({"display": "block"}).animate({
                    opacity: "0",
                    width: "0",
                    height: "0"
                }, 250);
            });

            e.preventDefault();
        });
    }
}
