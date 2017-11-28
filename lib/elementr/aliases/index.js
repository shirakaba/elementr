"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../core/index");
function a(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["a", textOrPropsOrChild].concat(args));
}
exports.a = a;
function button(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["button", textOrPropsOrChild].concat(args));
}
exports.button = button;
function div(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["div", textOrPropsOrChild].concat(args));
}
exports.div = div;
function table(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["table", textOrPropsOrChild].concat(args));
}
exports.table = table;
function tr(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["tr", textOrPropsOrChild].concat(args));
}
exports.tr = tr;
function td(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["td", textOrPropsOrChild].concat(args));
}
exports.td = td;
function span(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["span", textOrPropsOrChild].concat(args));
}
exports.span = span;
function p(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["p", textOrPropsOrChild].concat(args));
}
exports.p = p;
function hn(level, textOrPropsOrChild) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, [level, textOrPropsOrChild].concat(args));
}
exports.hn = hn;
function img(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["img", textOrPropsOrChild].concat(args));
}
exports.img = img;
function video(textOrPropsOrChild) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return index_1.makeElement.apply(void 0, ["video", textOrPropsOrChild].concat(args));
}
exports.video = video;
