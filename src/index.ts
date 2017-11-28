/** Adapted from: https://hackernoon.com/how-i-converted-my-react-app-to-vanillajs-and-whether-or-not-it-was-a-terrible-idea-4b14b1b2faff */

function appendText(el: HTMLElement, text: string): void {
    el.appendChild(document.createTextNode(text));
}

function appendArray(el: HTMLElement, children: (HTMLElement|string)[]): void {
    children.forEach((child) => {
        if (typeof child === "string") {
            appendText(el, child as string);
        } else if (Array.isArray(child)) {
            appendArray(el, child);
        } else if (child instanceof HTMLElement) {
            el.appendChild(child as HTMLElement);
        }
    });
}

function setStyles(el: HTMLElement, styles: Partial<CSSStyleDeclaration>): void {
    Object.keys(styles).forEach((styleName: keyof CSSStyleDeclaration) => {
        el.style[styleName as any] = styles[styleName];
    });
}

export function styleHTMLElement<E extends HTMLElement>(el: E, props: HTMLElementWithPartialStyles<E>): E {
    Object.keys(props).forEach((propName: keyof E) => {
        if(typeof el[propName] === "undefined"){
            console.warn(`${propName} is not a valid property of a <${el.nodeName.toLowerCase()}>.`);
        } else {
            // Many possible types of the properties on E, thus no index signature available.
            // Usually: string|null|Partial<CSSStyleDeclaration>, but could even be HTMLSlotElement, etc.
            const value: any = (<any>props)[(<any>propName)];

            if(propName === "style") {
                setStyles(el, value as Partial<CSSStyleDeclaration>);
            } else if (value) {
                el[propName] = value;
            }
        }
    });

    return el;
}

export interface PartialStyles {
    style: Partial<CSSStyleDeclaration>;
}

export type HTMLElementWithPartialStyles<T extends HTMLElement> = Partial<T> | PartialStyles;

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
export function makeElement<K extends keyof HTMLElementTagNameMap>(
    elementType: K,
    textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLElementTagNameMap[K]>|HTMLElement|HTMLElement[],
    ...otherChildren: (HTMLElement|string)[]
)
: HTMLElementTagNameMap[K]
{
    const el = document.createElement(elementType);

    if(textOrPropsOrChild){
        if(Array.isArray(textOrPropsOrChild)){
            appendArray(el, textOrPropsOrChild);
        } else if (textOrPropsOrChild instanceof HTMLElement){
            el.appendChild(textOrPropsOrChild as HTMLElement);
        } else if (typeof textOrPropsOrChild === "string"){
            appendText(el, textOrPropsOrChild as string);
        } else if (typeof textOrPropsOrChild === "object"){
            styleHTMLElement(el, textOrPropsOrChild);
        }
    }

    if(otherChildren) appendArray(el, otherChildren);

    return el;
}

export function a(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLAnchorElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLAnchorElement { return makeElement("a", textOrPropsOrChild, ...args); }
export function button(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLButtonElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLButtonElement { return makeElement("button", textOrPropsOrChild, ...args); }
export function div(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLDivElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLDivElement { return makeElement("div", textOrPropsOrChild, ...args); }
export function table(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLTableElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLTableElement { return makeElement("table", textOrPropsOrChild, ...args); }
export function tr(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLTableRowElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLTableRowElement { return makeElement("tr", textOrPropsOrChild, ...args); }
export function td(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLTableCellElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLTableCellElement { return makeElement("td", textOrPropsOrChild, ...args); }
export function span(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLSpanElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLSpanElement { return makeElement("span", textOrPropsOrChild, ...args); }
export function p(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLParagraphElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLParagraphElement { return makeElement("p", textOrPropsOrChild, ...args); }
export function hn(level: "h1"|"h2"|"h3"|"h4"|"h5"|"h6", textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLHeadingElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLHeadingElement { return makeElement(level, textOrPropsOrChild, ...args); }
export function img(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLImageElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLImageElement { return makeElement("img", textOrPropsOrChild, ...args); }
export function video(textOrPropsOrChild?: string|HTMLElementWithPartialStyles<HTMLVideoElement>|HTMLElement|HTMLElement[], ...args: (HTMLElement|string)[]): HTMLVideoElement { return makeElement("video", textOrPropsOrChild, ...args); }