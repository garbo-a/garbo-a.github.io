/**
 * Created by Garbovskiy on 23.07.2015.
 */
var app = (function(app) {
    var self   = app,
        htmlBody   = $("html, body"),
        prevScroll = true,
        win    = $(window),
        doc    = $(document);

    self.phoneBlocks = {};
    self.scrollTop = doc.scrollTop();

    preventScroll = function(event) {
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    };

    // ini function
    self.ini = function() {
        self.preventKeyScroll();
        self.collectPhones(".phone-frame");
        self.scroll();
    };

    // functions on scroll
    self.scroll = function() {
        doc.on("mousewheel", function(event) {
            self.updateScrollTop();
            self.scrollPosition(event);
        });
    };

    // to find and collect all phone screens
    self.collectPhones = function(className) {
        var block  = [],
            start  = [],
            height = [],
            stop   = [],
            scrolled = self.scrollTop;

        doc.find(className).each(function() {
            var elem 	   = $(this),
                eleStart   = elem.offset().top,
                elemHeight = elem.height(),
                elemStop   = elem.offset().top + elemHeight;

            // Lets put scroll to maximum
            // if scrolledTop >= end of phone
            if(scrolled >= elemStop) {
                elem.find(".screen").scrollTop( elem.find("img").height() );
            }

            block.push( elem );
            start.push( eleStart );
            height.push( elemHeight );
            stop.push( elemStop );
        });

        return self.phoneBlocks = {
            block: block,
            start: start,
            height: height,
            stop: stop
        };
    };

    // to update doc.scrollTop and stop animation while scrolling
    self.updateScrollTop = function() {
        htmlBody.stop().clearQueue();
        return self.scrollTop = doc.scrollTop();
    };
    // main func, collects and analysis data
    self.scrollPosition = function(event) {
        var scrolled = self.scrollTop,
            start    = self.phoneBlocks.start,
            stop     = self.phoneBlocks.stop;

        if(!prevScroll) {
            preventScroll(event);
        }

        for (var key in start) {
            if( scrolled >= start[key] && scrolled <= stop[key] ) {
                prevScroll = false;
                self.scrollScreen(key, event.deltaY);
                self.fixScrollTop(key);
            }
        }

    };

    // to scroll document to top of the phone
    self.fixScrollTop = function(key) {
        var time  	 = 350,
            scrolled = self.scrollTop,
            start    = self.phoneBlocks.start[key];

        if(prevScroll) return false;

        if(!prevScroll && scrolled > start) {
            htmlBody.stop().clearQueue().animate({
                scrollTop: start
            }, time);
        }

    };

    // to scroll image in screen
    self.scrollScreen = function(key, way) {
        var blockToScroll = self.phoneBlocks.block[key],
            scroll        = $( blockToScroll ).find(".screen"),
            content 	  = scroll.find("img"),
            maximumScroll = content.height() - scroll.height(),
            scrollTop, rate;

        rate = self.isMac() ? -way : -way * 40;
        scrollTop = scroll.scrollTop() + rate;

        scroll.scrollTop(scrollTop);

        if(scrollTop >= maximumScroll || scrollTop <= 0) {
            prevScroll = true;
        }
    };


    // just to prevent scroll by keydowns
    self.preventKeyScroll = function() {
        win.on("keydown", function(event) {
            switch(event.keyCode) {
                case 40: case 38: case 32:
                event.preventDefault();
                break;
            }
        });
    };

    // to detect is it Mac or PC
    self.isMac = function() {
        var platform = window.navigator.platform;
        return (platform.indexOf("Mac") > -1) ? true : false;
    };


    return self;
}(app || {}));

(function($) {
    app.ini();
}($));




