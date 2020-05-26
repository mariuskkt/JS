import {mount} from './mount';
import {Component} from "./Compotent";
import {App} from "./App";

// sukuria elementa pagal name gauta is hyperscript funkcijos.
// prisega attributus tam elementui ir ziuri ar turi children.
// jei turi, kiekviena childrenas eina i mount funkcija.
export function renderNode(vNode) {
    console.log(vNode);
// jeigu atejes children yra stringas, tada jam yra sukuriamas text elementas.
    if (typeof vNode === "string") {
        return document.createTextNode(vNode);
    }
    const {nodeName, attributes, children} = vNode;
    let $htmlElement;

    switch (typeof nodeName) {
        case "function":
            $htmlElement = renderComponent(nodeName, attributes)
            break;
        case "string":
            $htmlElement = renderElement(nodeName, attributes)
            break;
    }

    children.forEach(child => mount(child, $htmlElement));

    return $htmlElement;
}

export function renderComponent(Component, props) {
    const component = new Component(props);
    const Vnode = component.render();
    const $htmlElement = renderNode(Vnode);
    component.$node = $htmlElement;

    return $htmlElement
}


function renderElement(nodeName, attributes) {
    const $htmlElement = document.createElement(nodeName);
    for (let key in attributes) {
        if (typeof attributes[key] === 'function') {
            addEventListener(key, attributes[key])
        } else {
            $htmlElement.setAttribute(key, attributes[key]);
        }
    }

    return $htmlElement
}