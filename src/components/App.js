import {Button} from "./Button";
import {Input} from "./Input";
import {ListItem} from "./ListItem";
import {Component, h} from "../vdom/bootloader";

export class App extends Component {
    constructor() {
        super();
        this.state.title = 'kill';
        this.state.todos = ['shit'];
        this.deleteItem = this.deleteItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.editItem = this.editItem.bind(this);
        this.updateLi = this.updateLi.bind(this)
    }

    handleInput(e) {
        if (e.keyCode === 13) {
            const updateTodo = this.state.todos;
            updateTodo.push(e.target.value);
            this.setState({todos: updateTodo});
        }
    }

    deleteItem(id) {
        const updateTodo = this.state.todos;
        updateTodo.splice(id, 1);
        this.setState({todos: updateTodo});
    }

    editItem(id) {
        const updateTodo = this.state.todos;
        updateTodo[id] = 'completed';
        this.setState({todos: updateTodo});
    }

    updateLi(id, value) {
        const updateTodo = this.state.todos;
        updateTodo.splice(id, 1, value);
        this.setState({todos: updateTodo});
    }

    render() {
        const array = this.state.todos.map((todo, index) => {
            return h(ListItem, {
                todo: todo,
                id: index,
                handler: this.deleteItem,
                edit: this.editItem,
                updateItem: this.updateLi
            })
        });
        return h(
            'div',
            {
                class: 'container',
                style: 'height: 200px; border: 1px solid black'
            },
            h('h1', {}, this.state.title),
            h(Input, {handler: this.handleInput, value:''}),
            h('ul', {}, ...array)
        );
    }
}
