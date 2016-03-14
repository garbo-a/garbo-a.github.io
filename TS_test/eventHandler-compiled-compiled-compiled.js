"use strict";

function addEvent(object, type, callback) {
    if (object == null || typeof object == 'undefined') {
        return;
    }
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
};

//# sourceMappingURL=eventHandler-compiled.js.map

//# sourceMappingURL=eventHandler-compiled-compiled.js.map

//# sourceMappingURL=eventHandler-compiled-compiled-compiled.js.map