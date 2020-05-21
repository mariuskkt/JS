import {Component} from "./Compotent";
import {hyperScript} from "./hyperScript";

export class App extends Component {
    render() {
        const button = hyperScript('button', {class: 'btn'}, 'PRESS');
        const h1 = hyperScript('h1', {class: 'title'}, 'Test');
        const div = hyperScript('div', {class: 'container', style: 'height: 200px; border: 1px solid black'}, h1, button);
        return div
    }
}