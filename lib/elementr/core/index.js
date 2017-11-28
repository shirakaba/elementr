"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appendText(el, text) {
    el.appendChild(document.createTextNode(text));
}
function appendArray(el, children) {
    children.forEach(function (child) {
        if (typeof child === "string") {
            appendText(el, child);
        }
        else if (Array.isArray(child)) {
            appendArray(el, child);
        }
        else if (child instanceof HTMLElement) {
            el.appendChild(child);
        }
    });
}
function setStyles(el, styles) {
    Object.keys(styles).forEach(function (styleName) {
        el.style[styleName] = styles[styleName];
    });
}
function styleHTMLElement(el, props) {
    Object.keys(props).forEach(function (propName) {
        if (typeof el[propName] === "undefined") {
            console.warn(propName + " is not a valid property of a <" + el.nodeName.toLowerCase() + ">.");
        }
        else {
            var value = props[propName];
            if (propName === "style") {
                setStyles(el, value);
            }
            else if (value) {
                el[propName] = value;
            }
        }
    });
    return el;
}
exports.styleHTMLElement = styleHTMLElement;
function makeElement(elementType, textOrPropsOrChild) {
    var otherChildren = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherChildren[_i - 2] = arguments[_i];
    }
    var el = document.createElement(elementType);
    if (textOrPropsOrChild) {
        if (Array.isArray(textOrPropsOrChild)) {
            appendArray(el, textOrPropsOrChild);
        }
        else if (textOrPropsOrChild instanceof HTMLElement) {
            el.appendChild(textOrPropsOrChild);
        }
        else if (typeof textOrPropsOrChild === "string") {
            appendText(el, textOrPropsOrChild);
        }
        else if (typeof textOrPropsOrChild === "object") {
            styleHTMLElement(el, textOrPropsOrChild);
        }
    }
    if (otherChildren)
        appendArray(el, otherChildren);
    return el;
}
exports.makeElement = makeElement;
