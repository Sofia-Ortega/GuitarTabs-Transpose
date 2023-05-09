"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpans = exports.setSpans = exports.spans = void 0;
function setSpans(s) {
    exports.spans = s;
}
exports.setSpans = setSpans;
function getSpans(className) {
    return document.getElementsByClassName(className);
}
exports.getSpans = getSpans;
