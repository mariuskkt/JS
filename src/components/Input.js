import {h, Component} from "../vdom/bootloader";

export class Input extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return h('input',
            {
                keyup: this.props.handler,
                value: this.props.value
            });
    }
}
