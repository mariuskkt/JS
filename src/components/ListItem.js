import {h, Component} from "../vdom/bootloader";
import {Button} from "./Button";
import {Input} from "./Input";

export class ListItem extends Component {
    constructor(props) {
        super(props);

        this.ButtonHandler = this.ButtonHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.keyupFunction = this.keyupFunction.bind(this);
    }

    ButtonHandler() {
        this.props.handler(this.props.id);
    }

    editHandler() {
        this.props.edit(this.props.id);
    }

    keyupFunction(e) {
        if (e.keyCode === 13) {
            this.props.updateItem(this.props.id, e.target.value)
        }
    }

    render() {
        return h('li',
            {},
            // h('span', {}, this.props.todo),
            h(Input, {
                    value: this.props.todo,
                    handler: this.keyupFunction
                },
                this.props.todo),
            h(Button, {
                name: 'delete',
                onClick: this.ButtonHandler,
                id: this.props.id
            }),
            h(Button, {
                name: 'edit',
                onClick: this.editHandler,
                id: this.props.id
            }));
    }
}
