var ctx = $('#demo')[0].getContext('2d'),
    img = new Image,
    isDown = false,
    radius = 25;

/// setup logic

$(img).on('load', function() {
    $('#demo').on('mousedown', function(e) {
        isDown = true;
        erase(getXY(e));
    })
    .on('mousemove', function(e) {
        if (isDown) erase(getXY(e));
    });
    $(window).on('mouseup', function(e) {
        isDown = false;
    });
    
    $('#reset').on('click', function() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(img, 0, 0);
        ctx.globalCompositeOperation = 'destination-out';
    });

    ctx.drawImage(img, 0, 0);
    ctx.globalCompositeOperation = 'destination-out';
});
img.src = 'https://db.tt/TX2wRqCz';

function getXY(e) {
    var r = $('#demo')[0].getBoundingClientRect();
    return {x: e.clientX - r.left, y: e.clientY - r.top};
}

function erase(pos) {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}// JavaScript Document