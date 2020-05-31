import {Component} from "../vdom/Compotent";
import {h} from '../vdom/hyperScript';


export class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return h('button',
            {click: this.props.onClick},
            this.props.name);
    }
}

