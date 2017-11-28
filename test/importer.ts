import {HTMLElementWithPartialStyles, makeElement} from "../src/elementr/core/index";
import {div} from "../src/elementr/aliases/index";

import {span, styleHTMLElement} from "../src/elementr";

// imported from submodules:
//   div(), makeElement(), HTMLElementWithPartialStyles
const divProps: HTMLElementWithPartialStyles<HTMLDivElement> = { id: "myDiv", style: { position: "absolute" }};
const myDiv1: HTMLDivElement = makeElement('div', divProps);
const myDiv2: HTMLDivElement = div(divProps);

// imported from 'elementr' supermodule:
//   span(), styleHTMLElement()
const spanProps: HTMLElementWithPartialStyles<HTMLSpanElement> = { id: "mySpan", style: { position: "relative" }};
const mySpan1: HTMLSpanElement = span(spanProps);
const mySpan2: HTMLSpanElement = styleHTMLElement(mySpan1, spanProps);

