import {Component} from "./Compotent";
import {h} from './hyperScript';

export class Button extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return h('button', {class: 'btn'}, this.props.name);
    }
}