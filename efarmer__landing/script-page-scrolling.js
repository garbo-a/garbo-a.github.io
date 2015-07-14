/**
 * Created by Garbovskiy on 14.07.2015.
 */
$(document).ready(function () {
    //SCROLL TO ANCHOR TAG
    var $root = $('html, body');

    $('.goto').click(function () {
        var $gotoid = $(this).prop('id');
        var $justid = $gotoid.replace('goto', '');

        if (typeof $("#" + $justid) != undefined) { // test if target exists
            $root.animate({
                scrollTop: $("#" + $justid).offset().top - $('#header').height()
            }, 1000);
        }
        return false;
    });
});