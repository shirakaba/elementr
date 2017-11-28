"use strict";
/** Adapted from: https://hackernoon.com/how-i-converted-my-react-app-to-vanillajs-and-whether-or-not-it-was-a-terrible-idea-4b14b1b2faff */
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
            // Many possible types of the properties on E, thus no index signature available.
            // Usually: string|null|Partial<CSSStyleDeclaration>, but could even be HTMLSlotElement, etc.
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
// Because the nested "style: CSSStyleDeclaration;" property needs to be expressed as Partial, too.
// From: https://stackoverflow.com/a/41980288/5951226
// Originally used: RecursivePartial<HTMLAnchorElement> and RecursivePartial<HTMLElementTagNameMap[K]>
// export type RecursivePartial<T> = {
//     [P in keyof T]?: RecursivePartial<T[P]>;
// };
// TODO: change Partial<HTMLElement> to Pick<HTMLElement, "accessKey"|"contentEditable"|"dir"> (eg. all the non-readonly ones.):
// https://stackoverflow.com/questions/47396729/how-do-i-pick-only-the-non-readonly-fields-from-an-interface
// export function makeElement<K extends keyof HTMLElementTagNameMap>(elementType: K, cssStyleObj?: Partial<CSSStyleDeclaration>, ...otherChildren: (HTMLElement|string)[]): HTMLElementTagNameMap[K];
// export function makeElement<K extends keyof HTMLElementTagNameMap>(elementType: K, subElements?: HTMLElement[], ...otherChildren: (HTMLElement|string)[]): HTMLElementTagNameMap[K];
// export function makeElement<K extends keyof HTMLElementTagNameMap>(elementType: K, subElement?: HTMLElement, ...otherChildren: (HTMLElement|string)[]): HTMLElementTagNameMap[K];
// export function makeElement<K extends keyof HTMLElementTagNameMap>(elementType: K, htmlProperty?: Partial<HTMLElementTagNameMap[K]>, ...otherChildren: (HTMLElement|string)[]): HTMLElementTagNameMap[K];
// export function makeElement<K extends keyof HTMLElementTagNameMap>(elementType: K, textContent?: string, ...otherChildren: (HTMLElement|string)[]): HTMLElementTagNameMap[K];
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
