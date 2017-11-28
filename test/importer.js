"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/elementr/core/index");
var index_2 = require("../src/elementr/aliases/index");
var elementr_1 = require("../src/elementr");
// imported from submodules:
//   div(), makeElement(), HTMLElementWithPartialStyles
var divProps = { id: "myDiv", style: { position: "absolute" } };
var myDiv1 = index_1.makeElement('div', divProps);
var myDiv2 = index_2.div(divProps);
// imported from 'elementr' supermodule:
//   span(), styleHTMLElement()
var spanProps = { id: "mySpan", style: { position: "relative" } };
var mySpan1 = elementr_1.span(spanProps);
var mySpan2 = elementr_1.styleHTMLElement(mySpan1, spanProps);
