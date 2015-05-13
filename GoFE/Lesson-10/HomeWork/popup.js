/**
 * Created by Garbovskiy on 13.05.15.
 */

var main = function() {
    $('.portfolio__popup-zoom').click(function() {
        $('.portfolio__popup').addClass('portfolio__popup_visible_yes');
        $('.portfolio__overlay').addClass('portfolio__popup_visible_yes');
    });
};
$(document).ready(main);
