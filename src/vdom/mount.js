import {renderNode} from "./bootloader"

//atejes children is render funkcijos, pereina per renderi tokiu paciu principu kaip tevas.
export function mount(vNode, parent) {
    let $node = renderNode(vNode);
    parent.append($node);
}