let privateVars = new WeakMap();

class IPrivateVar {
    constructor() {
        privateVars.set(this, {});
    }

    _createProxy(settings) {
        let proxy = new Proxy(this, settings);
        privateVars.set(proxy, privateVars.get(this));
        return proxy;
    }

    _setPrivateVar(key, value) {
        let privateVarsIds = privateVars.get(this);
        if (!privateVarsIds[key]) {
            privateVarsIds[key] = Symbol(key);
        }
        this[privateVarsIds[key]] = value;
    }

    _getPrivateVar(key) {
        let id = privateVars.get(this)[key];
        let value = id && this[id];
        if (typeof value === 'undefined') {
            return null;
        }
        return value;
    }
}

export default IPrivateVar;