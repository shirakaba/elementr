import {HTMLElementWithPartialStyles, makeElement} from "../src/elementr/core/index";
import {div} from "../src/elementr/aliases/index";

const divProps: string|HTMLElementWithPartialStyles<HTMLDivElement>|HTMLElement|HTMLElement[] = { id: "myDiv", style: { position: "absolute" }};
const myDiv1: HTMLDivElement = makeElement('div', divProps);
const myDiv2: HTMLDivElement = div(divProps);
