import {Component} from "./Compotent";
import {h} from './hyperScript';
import {Button} from "./Button";

export class App extends Component {
    constructor() {
        super();
        this.buttonName = 'wawawwaaawyywa';
        this.title = 'Kas cia daros?'
    }

    render() {
        const childTittle = h('h1', {class: 'title'}, this.title);
        return h('div',
            {class: 'container', style: 'height: 200px; border: 1px solid black'},
            childTittle,
            h(Button, {name: this.buttonName}));
    }
}