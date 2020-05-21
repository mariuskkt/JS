function hyperScript(nodeName, attributes = {}, ...children) {
    return {nodeName, attributes, children};
}

export {hyperScript as h};