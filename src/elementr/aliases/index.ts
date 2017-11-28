import { makeElement, HTMLElementWithPartialStyles } from "../core/index";

export type TextOrChild = string|HTMLElement;
export type TextOrChildOrChildren = TextOrChild|HTMLElement[];

// export function a(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLAnchorElement>, ...args: TextOrChild[]): HTMLAnchorElement { return makeElement("a", textOrPropsOrChild, ...args); }
// export function button(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLButtonElement>, ...args: TextOrChild[]): HTMLButtonElement { return makeElement("button", textOrPropsOrChild, ...args); }
// export function div(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLDivElement>, ...args: TextOrChild[]): HTMLDivElement { return makeElement("div", textOrPropsOrChild, ...args); }
// export function table(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableElement>, ...args: TextOrChild[]): HTMLTableElement { return makeElement("table", textOrPropsOrChild, ...args); }
// export function tr(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableRowElement>, ...args: TextOrChild[]): HTMLTableRowElement { return makeElement("tr", textOrPropsOrChild, ...args); }
// export function td(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableCellElement>, ...args: TextOrChild[]): HTMLTableCellElement { return makeElement("td", textOrPropsOrChild, ...args); }
// export function span(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLSpanElement>, ...args: TextOrChild[]): HTMLSpanElement { return makeElement("span", textOrPropsOrChild, ...args); }
// export function p(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLParagraphElement>, ...args: TextOrChild[]): HTMLParagraphElement { return makeElement("p", textOrPropsOrChild, ...args); }
// export function hn(level: "h1"|"h2"|"h3"|"h4"|"h5"|"h6", textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadingElement>, ...args: TextOrChild[]): HTMLHeadingElement { return makeElement(level, textOrPropsOrChild, ...args); }
// export function img(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLImageElement>, ...args: TextOrChild[]): HTMLImageElement { return makeElement("img", textOrPropsOrChild, ...args); }
// export function video(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLVideoElement>, ...args: TextOrChild[]): HTMLVideoElement { return makeElement("video", textOrPropsOrChild, ...args); }

// From: HTMLElementTagNameMap
export function a(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLAnchorElement>, ...args: TextOrChild[]): HTMLAnchorElement { return makeElement("a", textOrPropsOrChild, ...args); };
export function applet(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLAppletElement>, ...args: TextOrChild[]): HTMLAppletElement { return makeElement("applet", textOrPropsOrChild, ...args); };
export function area(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLAreaElement>, ...args: TextOrChild[]): HTMLAreaElement { return makeElement("area", textOrPropsOrChild, ...args); };
export function audio(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLAudioElement>, ...args: TextOrChild[]): HTMLAudioElement { return makeElement("audio", textOrPropsOrChild, ...args); };
export function base(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLBaseElement>, ...args: TextOrChild[]): HTMLBaseElement { return makeElement("base", textOrPropsOrChild, ...args); };
export function basefont(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLBaseFontElement>, ...args: TextOrChild[]): HTMLBaseFontElement { return makeElement("basefont", textOrPropsOrChild, ...args); };
export function blockquote(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLQuoteElement>, ...args: TextOrChild[]): HTMLQuoteElement { return makeElement("blockquote", textOrPropsOrChild, ...args); };
export function body(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLBodyElement>, ...args: TextOrChild[]): HTMLBodyElement { return makeElement("body", textOrPropsOrChild, ...args); };
export function br(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLBRElement>, ...args: TextOrChild[]): HTMLBRElement { return makeElement("br", textOrPropsOrChild, ...args); };
export function button(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLButtonElement>, ...args: TextOrChild[]): HTMLButtonElement { return makeElement("button", textOrPropsOrChild, ...args); };
export function canvas(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLCanvasElement>, ...args: TextOrChild[]): HTMLCanvasElement { return makeElement("canvas", textOrPropsOrChild, ...args); };
export function caption(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableCaptionElement>, ...args: TextOrChild[]): HTMLTableCaptionElement { return makeElement("caption", textOrPropsOrChild, ...args); };
export function col(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableColElement>, ...args: TextOrChild[]): HTMLTableColElement { return makeElement("col", textOrPropsOrChild, ...args); };
export function colgroup(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableColElement>, ...args: TextOrChild[]): HTMLTableColElement { return makeElement("colgroup", textOrPropsOrChild, ...args); };
export function data(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLDataElement>, ...args: TextOrChild[]): HTMLDataElement { return makeElement("data", textOrPropsOrChild, ...args); };
export function datalist(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLDataListElement>, ...args: TextOrChild[]): HTMLDataListElement { return makeElement("datalist", textOrPropsOrChild, ...args); };
export function del(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLModElement>, ...args: TextOrChild[]): HTMLModElement { return makeElement("del", textOrPropsOrChild, ...args); };
export function dir(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLDirectoryElement>, ...args: TextOrChild[]): HTMLDirectoryElement { return makeElement("dir", textOrPropsOrChild, ...args); };
export function div(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLDivElement>, ...args: TextOrChild[]): HTMLDivElement { return makeElement("div", textOrPropsOrChild, ...args); };
export function dl(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLDListElement>, ...args: TextOrChild[]): HTMLDListElement { return makeElement("dl", textOrPropsOrChild, ...args); };
export function embed(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLEmbedElement>, ...args: TextOrChild[]): HTMLEmbedElement { return makeElement("embed", textOrPropsOrChild, ...args); };
export function fieldset(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLFieldSetElement>, ...args: TextOrChild[]): HTMLFieldSetElement { return makeElement("fieldset", textOrPropsOrChild, ...args); };
export function font(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLFontElement>, ...args: TextOrChild[]): HTMLFontElement { return makeElement("font", textOrPropsOrChild, ...args); };
export function form(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLFormElement>, ...args: TextOrChild[]): HTMLFormElement { return makeElement("form", textOrPropsOrChild, ...args); };
export function frame(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLFrameElement>, ...args: TextOrChild[]): HTMLFrameElement { return makeElement("frame", textOrPropsOrChild, ...args); };
export function frameset(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLFrameSetElement>, ...args: TextOrChild[]): HTMLFrameSetElement { return makeElement("frameset", textOrPropsOrChild, ...args); };
export function h1(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadingElement>, ...args: TextOrChild[]): HTMLHeadingElement { return makeElement("h1", textOrPropsOrChild, ...args); };
export function h2(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadingElement>, ...args: TextOrChild[]): HTMLHeadingElement { return makeElement("h2", textOrPropsOrChild, ...args); };
export function h3(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadingElement>, ...args: TextOrChild[]): HTMLHeadingElement { return makeElement("h3", textOrPropsOrChild, ...args); };
export function h4(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadingElement>, ...args: TextOrChild[]): HTMLHeadingElement { return makeElement("h4", textOrPropsOrChild, ...args); };
export function h5(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadingElement>, ...args: TextOrChild[]): HTMLHeadingElement { return makeElement("h5", textOrPropsOrChild, ...args); };
export function h6(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadingElement>, ...args: TextOrChild[]): HTMLHeadingElement { return makeElement("h6", textOrPropsOrChild, ...args); };
export function head(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHeadElement>, ...args: TextOrChild[]): HTMLHeadElement { return makeElement("head", textOrPropsOrChild, ...args); };
export function hr(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHRElement>, ...args: TextOrChild[]): HTMLHRElement { return makeElement("hr", textOrPropsOrChild, ...args); };
export function html(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLHtmlElement>, ...args: TextOrChild[]): HTMLHtmlElement { return makeElement("html", textOrPropsOrChild, ...args); };
export function iframe(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLIFrameElement>, ...args: TextOrChild[]): HTMLIFrameElement { return makeElement("iframe", textOrPropsOrChild, ...args); };
export function img(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLImageElement>, ...args: TextOrChild[]): HTMLImageElement { return makeElement("img", textOrPropsOrChild, ...args); };
export function input(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLInputElement>, ...args: TextOrChild[]): HTMLInputElement { return makeElement("input", textOrPropsOrChild, ...args); };
export function ins(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLModElement>, ...args: TextOrChild[]): HTMLModElement { return makeElement("ins", textOrPropsOrChild, ...args); };
export function isindex(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLUnknownElement>, ...args: TextOrChild[]): HTMLUnknownElement { return makeElement("isindex", textOrPropsOrChild, ...args); };
export function label(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLLabelElement>, ...args: TextOrChild[]): HTMLLabelElement { return makeElement("label", textOrPropsOrChild, ...args); };
export function legend(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLLegendElement>, ...args: TextOrChild[]): HTMLLegendElement { return makeElement("legend", textOrPropsOrChild, ...args); };
export function li(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLLIElement>, ...args: TextOrChild[]): HTMLLIElement { return makeElement("li", textOrPropsOrChild, ...args); };
export function link(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLLinkElement>, ...args: TextOrChild[]): HTMLLinkElement { return makeElement("link", textOrPropsOrChild, ...args); };
export function listing(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLPreElement>, ...args: TextOrChild[]): HTMLPreElement { return makeElement("listing", textOrPropsOrChild, ...args); };
export function map(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLMapElement>, ...args: TextOrChild[]): HTMLMapElement { return makeElement("map", textOrPropsOrChild, ...args); };
export function marquee(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLMarqueeElement>, ...args: TextOrChild[]): HTMLMarqueeElement { return makeElement("marquee", textOrPropsOrChild, ...args); };
export function menu(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLMenuElement>, ...args: TextOrChild[]): HTMLMenuElement { return makeElement("menu", textOrPropsOrChild, ...args); };
export function meta(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLMetaElement>, ...args: TextOrChild[]): HTMLMetaElement { return makeElement("meta", textOrPropsOrChild, ...args); };
export function meter(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLMeterElement>, ...args: TextOrChild[]): HTMLMeterElement { return makeElement("meter", textOrPropsOrChild, ...args); };
export function nextid(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLUnknownElement>, ...args: TextOrChild[]): HTMLUnknownElement { return makeElement("nextid", textOrPropsOrChild, ...args); };
export function object(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLObjectElement>, ...args: TextOrChild[]): HTMLObjectElement { return makeElement("object", textOrPropsOrChild, ...args); };
export function ol(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLOListElement>, ...args: TextOrChild[]): HTMLOListElement { return makeElement("ol", textOrPropsOrChild, ...args); };
export function optgroup(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLOptGroupElement>, ...args: TextOrChild[]): HTMLOptGroupElement { return makeElement("optgroup", textOrPropsOrChild, ...args); };
export function option(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLOptionElement>, ...args: TextOrChild[]): HTMLOptionElement { return makeElement("option", textOrPropsOrChild, ...args); };
export function output(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLOutputElement>, ...args: TextOrChild[]): HTMLOutputElement { return makeElement("output", textOrPropsOrChild, ...args); };
export function p(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLParagraphElement>, ...args: TextOrChild[]): HTMLParagraphElement { return makeElement("p", textOrPropsOrChild, ...args); };
export function param(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLParamElement>, ...args: TextOrChild[]): HTMLParamElement { return makeElement("param", textOrPropsOrChild, ...args); };
export function picture(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLPictureElement>, ...args: TextOrChild[]): HTMLPictureElement { return makeElement("picture", textOrPropsOrChild, ...args); };
export function pre(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLPreElement>, ...args: TextOrChild[]): HTMLPreElement { return makeElement("pre", textOrPropsOrChild, ...args); };
export function progress(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLProgressElement>, ...args: TextOrChild[]): HTMLProgressElement { return makeElement("progress", textOrPropsOrChild, ...args); };
export function q(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLQuoteElement>, ...args: TextOrChild[]): HTMLQuoteElement { return makeElement("q", textOrPropsOrChild, ...args); };
export function script(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLScriptElement>, ...args: TextOrChild[]): HTMLScriptElement { return makeElement("script", textOrPropsOrChild, ...args); };
export function select(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLSelectElement>, ...args: TextOrChild[]): HTMLSelectElement { return makeElement("select", textOrPropsOrChild, ...args); };
export function source(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLSourceElement>, ...args: TextOrChild[]): HTMLSourceElement { return makeElement("source", textOrPropsOrChild, ...args); };
export function span(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLSpanElement>, ...args: TextOrChild[]): HTMLSpanElement { return makeElement("span", textOrPropsOrChild, ...args); };
export function style(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLStyleElement>, ...args: TextOrChild[]): HTMLStyleElement { return makeElement("style", textOrPropsOrChild, ...args); };
export function table(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableElement>, ...args: TextOrChild[]): HTMLTableElement { return makeElement("table", textOrPropsOrChild, ...args); };
export function tbody(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableSectionElement>, ...args: TextOrChild[]): HTMLTableSectionElement { return makeElement("tbody", textOrPropsOrChild, ...args); };
export function td(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableDataCellElement>, ...args: TextOrChild[]): HTMLTableDataCellElement { return makeElement("td", textOrPropsOrChild, ...args); };
export function template(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTemplateElement>, ...args: TextOrChild[]): HTMLTemplateElement { return makeElement("template", textOrPropsOrChild, ...args); };
export function textarea(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTextAreaElement>, ...args: TextOrChild[]): HTMLTextAreaElement { return makeElement("textarea", textOrPropsOrChild, ...args); };
export function tfoot(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableSectionElement>, ...args: TextOrChild[]): HTMLTableSectionElement { return makeElement("tfoot", textOrPropsOrChild, ...args); };
export function th(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableHeaderCellElement>, ...args: TextOrChild[]): HTMLTableHeaderCellElement { return makeElement("th", textOrPropsOrChild, ...args); };
export function thead(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableSectionElement>, ...args: TextOrChild[]): HTMLTableSectionElement { return makeElement("thead", textOrPropsOrChild, ...args); };
export function time(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTimeElement>, ...args: TextOrChild[]): HTMLTimeElement { return makeElement("time", textOrPropsOrChild, ...args); };
export function title(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTitleElement>, ...args: TextOrChild[]): HTMLTitleElement { return makeElement("title", textOrPropsOrChild, ...args); };
export function tr(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTableRowElement>, ...args: TextOrChild[]): HTMLTableRowElement { return makeElement("tr", textOrPropsOrChild, ...args); };
export function track(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLTrackElement>, ...args: TextOrChild[]): HTMLTrackElement { return makeElement("track", textOrPropsOrChild, ...args); };
export function ul(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLUListElement>, ...args: TextOrChild[]): HTMLUListElement { return makeElement("ul", textOrPropsOrChild, ...args); };
export function video(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLVideoElement>, ...args: TextOrChild[]): HTMLVideoElement { return makeElement("video", textOrPropsOrChild, ...args); };
export function xMsWebview(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<MSHTMLWebViewElement>, ...args: TextOrChild[]): MSHTMLWebViewElement { return makeElement("x-ms-webview", textOrPropsOrChild, ...args); };
export function xmp(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLPreElement>, ...args: TextOrChild[]): HTMLPreElement { return makeElement("xmp", textOrPropsOrChild, ...args); };

// All HTMLElements from: ElementTagNameMap
// export function abbr(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("abbr", textOrPropsOrChild, ...args); };
// export function acronym(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("acronym", textOrPropsOrChild, ...args); };
// export function address(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("address", textOrPropsOrChild, ...args); };
// export function article(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("article", textOrPropsOrChild, ...args); };
// export function aside(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("aside", textOrPropsOrChild, ...args); };
// export function b(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("b", textOrPropsOrChild, ...args); };
// export function bdo(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("bdo", textOrPropsOrChild, ...args); };
// export function big(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("big", textOrPropsOrChild, ...args); };
// export function center(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("center", textOrPropsOrChild, ...args); };
// export function cite(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("cite", textOrPropsOrChild, ...args); };
// export function code(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("code", textOrPropsOrChild, ...args); };
// export function dd(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("dd", textOrPropsOrChild, ...args); };
// export function dfn(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("dfn", textOrPropsOrChild, ...args); };
// export function dt(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("dt", textOrPropsOrChild, ...args); };
// export function em(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("em", textOrPropsOrChild, ...args); };
// export function figcaption(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("figcaption", textOrPropsOrChild, ...args); };
// export function figure(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("figure", textOrPropsOrChild, ...args); };
// export function footer(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("footer", textOrPropsOrChild, ...args); };
// export function header(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("header", textOrPropsOrChild, ...args); };
// export function hgroup(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("hgroup", textOrPropsOrChild, ...args); };
// export function i(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("i", textOrPropsOrChild, ...args); };
// export function kbd(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("kbd", textOrPropsOrChild, ...args); };
// export function keygen(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("keygen", textOrPropsOrChild, ...args); };
// export function mark(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("mark", textOrPropsOrChild, ...args); };
// export function nav(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("nav", textOrPropsOrChild, ...args); };
// export function nobr(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("nobr", textOrPropsOrChild, ...args); };
// export function noframes(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("noframes", textOrPropsOrChild, ...args); };
// export function noscript(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("noscript", textOrPropsOrChild, ...args); };
// export function plaintext(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("plaintext", textOrPropsOrChild, ...args); };
// export function rt(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("rt", textOrPropsOrChild, ...args); };
// export function ruby(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("ruby", textOrPropsOrChild, ...args); };
// export function s(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("s", textOrPropsOrChild, ...args); };
// export function samp(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("samp", textOrPropsOrChild, ...args); };
// export function section(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("section", textOrPropsOrChild, ...args); };
// export function small(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("small", textOrPropsOrChild, ...args); };
// export function strike(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("strike", textOrPropsOrChild, ...args); };
// export function strong(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("strong", textOrPropsOrChild, ...args); };
// export function sub(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("sub", textOrPropsOrChild, ...args); };
// export function sup(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("sup", textOrPropsOrChild, ...args); };
// export function tt(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("tt", textOrPropsOrChild, ...args); };
// export function u(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("u", textOrPropsOrChild, ...args); };
// // export function var(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("var", textOrPropsOrChild, ...args); };
// export function wbr(textOrPropsOrChild?: TextOrChildOrChildren|HTMLElementWithPartialStyles<HTMLElement>, ...args: TextOrChild[]): HTMLElement { return makeElement("wbr", textOrPropsOrChild, ...args); };
