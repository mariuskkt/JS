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
    let $node;

    if (typeof nodeName === "function") {

        $node = renderComponent(nodeName)
    } else {
        $node = document.createElement(nodeName);
        for (let key in attributes) {
            $node.setAttribute(key, attributes[key]);
        }
    }
    children.forEach(child => mount(child, $node));
    return $node;
}


export function renderComponent(Component) {
    const component = new Component();
    const Vnode = component.render();
    const $node = renderNode(Vnode);
    component.$node = $node;

    return $node
}