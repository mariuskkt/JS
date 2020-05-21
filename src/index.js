'use strict';
import {h} from './hyperScript';
import {mount} from './mount';
import {App} from "./App";
import {renderComponent, renderNode} from "./renderNode";

mount(
    h(App),
    document.getElementById('app')
);