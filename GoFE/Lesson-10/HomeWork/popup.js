/**
 * Created by Garbovskiy on 13.05.15.
 */

var main = function () {
    $('.portfolio__item').on("click", $('.portfolio__popup-zoom'), function (event) {
        var i = $(event.delegateTarget).data('image-popup');
        $('.portfolio__popup').addClass('portfolio__popup_visible_yes').css("background", i);
        $('.portfolio__overlay').addClass('portfolio__popup_visible_yes');
    });

    $('.portfolio__popup-close').click(function () {
        $('.portfolio__popup').removeClass('portfolio__popup_visible_yes');
        $('.portfolio__overlay').removeClass('portfolio__popup_visible_yes');
    });
};

$(document).ready(main);

