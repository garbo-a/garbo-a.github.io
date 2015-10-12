(function itemHeight() {
    var items = document.body.querySelectorAll('.item__block');
    for (var i = 0; i < items.length; i++) {
        items[i].style.height = document.documentElement.clientHeight - 80 + 'px';
    }
})();

$(document).ready(function () {
    specialOffersNavManage();
    $(document).on("scroll", onScroll);
});

function specialOffersNavManage() {
    var navButton = $('.middle_panel-navigation .navigation-list-item');
    navButton.click(function (e) {
        var self = this;
        var placeToScroll = $('#' + this.dataset.id);
        self.classList.add('active');
        $('.submissive').removeClass('active');
        $(this.firstElementChild).addClass('active');
        e.preventDefault();
        scrollToAnchor(placeToScroll);
    });
}

function scrollToAnchor(selector) {
    var scrollPlace = $(selector);

    $('html, body').animate({
        scrollTop: scrollPlace.offset().top - 80
    }, 'slow');
}

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.middle_panel-navigation .navigation-list-item').each(function () {
        var currLink = $(this),
            refElement = $('#' + currLink.attr("data-id") );
        if ( refElement.position().top - 85 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.middle_panel-navigation .navigation-list-item').removeClass("active");
            currLink.addClass("active");
            $('.submissive').removeClass('active');
            $(this.firstElementChild).addClass('active');
        }
        else{
            currLink.removeClass("active");
        }
    });
}
