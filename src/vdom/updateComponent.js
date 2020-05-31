import {renderNode} from "./bootloader"

export function updateComponent(component)
{
    const $node = component.$node;
    const vNode = component.render();
    const $newNode = renderNode(vNode);
    $node.replaceWith($newNode);
    component.$node = $newNode;
}
