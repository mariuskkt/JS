export function hyperScript(nodeName, attributes = {}, ...children) {
    return {nodeName, attributes, children};
}