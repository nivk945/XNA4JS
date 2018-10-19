import Overload from '../Core/Overload.js';

let privateVars = new WeakMap();

class IPrivateVar {
    constructor() {
        privateVars.set(this, {});
    }
    
    static get [Symbol.toStringTag]() {
        return 'IPrivateVar';
    }

    _createProxy(...args) {
        return (
            IPrivateVar.prototype._createProxy = Overload.Create().
                Add([window.Object], function (settings) {
                    let proxy = new Proxy(this, settings);
                    privateVars.set(proxy, privateVars.get(this));
                    return proxy;
                })
        ).call(this, ...args);
    }

    _setPrivateVar(...args) {
        return (
            IPrivateVar.prototype._setPrivateVar = Overload.Create().
                Add([String, '*'], function (key, value) {
                    let privateVarsIds = privateVars.get(this);
                    if (!privateVarsIds[key]) {
                        privateVarsIds[key] = Symbol(key);
                    }
                    this[privateVarsIds[key]] = value;
                })
        ).call(this, ...args);
    }

    _getPrivateVar(...args) {
        return (
            IPrivateVar.prototype._getPrivateVar = Overload.Create().
                Add([String], function (key) {
                    let id = privateVars.get(this)[key];
                    let value = id && this[id];
                    if (typeof value === 'undefined') {
                        return null;
                    }
                    return value;
                })
        ).call(this, ...args);
    }
}

export default IPrivateVar;