'use strict';
import {App} from "./components/App";
import {mount, h} from "./vdom/bootloader"


mount(
    h(App),
    document.getElementById('app')
);