!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    "use strict";

    function r(e, t = {}, ...n) {
        return {nodeName: e, attributes: t, children: n}
    }

    function o(e, t) {
        let n = i(e);
        t.append(n)
    }

    function i(e) {
        if (console.log(e), "string" == typeof e) return document.createTextNode(e);
        const {nodeName: t, attributes: n, children: r} = e;
        let c;
        switch (typeof t) {
            case"function":
                c = function (e, t) {
                    const n = new e(t), r = i(n.render());
                    return n.$node = r, r
                }(t, n);
                break;
            case"string":
                c = function (e, t) {
                    const n = document.createElement(e);
                    for (let e in t) "function" == typeof t[e] ? n.addEventListener(e, t[e]) : n.setAttribute(e, t[e]);
                    return n
                }(t, n)
        }
        return r.forEach(e => o(e, c)), c
    }

    n.r(t);

    class c {
        constructor(e) {
            this.$node = null, this.props = e, this.state = {}
        }

        setState(e) {
            this.state = {...this.state, ...e}, function (e) {
                e.$node;
                const t = i(e.render());
                e.$node.replaceWith(t), e.$node = t
            }(this)
        }
    }

    class s extends c {
        constructor(e) {
            super(e)
        }

        render() {
            return r("button", {class: this.props.className, click: this.props.onClick}, this.props.name)
        }
    }

    o(r(class extends c {
        constructor() {
            super(), this.title = "Kas cia daros?"
        }

        lickMe() {
            console.log("skaito")
        }

        clickMe() {
            console.log("neskaito")
        }

        render() {
            const e = r("h1", {class: "title"}, this.title);
            return r("div", {
                class: "container",
                style: "height: 200px; border: 1px solid black"
            }, e, r(s, {name: "click me", className: "clikas", onClick: this.clickMe}), r(s, {
                name: "lick me",
                className: "likas",
                onClick: this.lickMe
            }), r("input", {placeholder: "bybiene"}), r(s, {name: "submit", onClick: this.lickMe}))
        }
    }), document.getElementById("app"))
}]);