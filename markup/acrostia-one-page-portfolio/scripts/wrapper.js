/**
 * Created by Александр on 14.04.2015.
 */
var main = function() {
    $('.arrow-right').click(function() {
        var currentSlide = $('.item.active');
        var nextSlide = currentSlide.next();

        if(nextSlide.length === 0) {
            nextSlide = $('.item').first();
        }

        currentSlide.fadeOut(600).removeClass('active');
        nextSlide.fadeIn(600).addClass('active');
    });
    $('.arrow-left').click(function() {
        var currentSlide = $('.item.active');
        var prevSlide = currentSlide.prev();

        if(prevSlide.length === 0) {
            prevSlide = $('.item').last();
        }

        currentSlide.fadeOut(600).removeClass('active');
        prevSlide.fadeIn(600).addClass('active');
    });
};
$(document).ready(main);