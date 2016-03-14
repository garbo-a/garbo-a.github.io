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

//# sourceMappingURL=enentHandler-compiled.js.map

//# sourceMappingURL=enentHandler-compiled-compiled.js.map

//# sourceMappingURL=enentHandler-compiled-compiled-compiled.js.map