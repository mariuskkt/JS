'use strict';
import {hyperScript} from './hyperScript';
import {mount} from './mount';
import {App} from "./App";
import {renderComponent, renderNode} from "./renderNode";

const button = hyperScript('button', {class: 'btn'}, 'PRESS');
const h1 = hyperScript('h1', {class: 'title'}, 'Test');
const div = hyperScript('div', {class: 'container', style: 'height: 200px; border: 1px solid black'}, h1, button);
mount(
    hyperScript(App),
    document.getElementById('app')
);