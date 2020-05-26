import {Component} from "./Compotent";
import {h} from './hyperScript';


export class Button extends Component {
    constructor(props) {
        super(props);
        this.state.name = true;
        this.state.className = 'btn';

        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({className: 'ne btn', name: !this.state.name});

        console.log(this);
    }

    render() {
        return h('button', {class: this.state.className, click: this.handler}, this.state.name? 'sveikas': 'nesveikas');
        // return h('button', {class: this.state.className, click: this.handler}, this.state.name? 'bbs': 'pzda');
    }
}

