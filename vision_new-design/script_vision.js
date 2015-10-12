$(document).ready(function () {
    rotateExpandableContent();
});

function rotateExpandableContent() {
    var activeItem = $('.content-item.active .btn-outline-dark');

    activeItem.click(function(e) {
        var expandableItem = $('.content-item.active .item__expandable-content'),
            backBtn = expandableItem.find('.item__expandable-back-btn');
        expandableItem.css({"display":"block"}).animate({
            opacity: "1",
            width: "100%",
            height: "90%"
        }, 250);
        backBtn.click(function(e) {
            var expandableItem = $('.content-item.active .item__expandable-content');
            expandableItem.css({"display":"block"}).animate({
                opacity: "0",
                width: "0",
                height: "0"
            }, 250);
        });

        e.preventDefault();
        //expandableItem.addClass('active');

    });

}

