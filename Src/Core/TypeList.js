import Overload from './Overload.js';
import Object from './Object.js';

let cacheTypeProxys = new WeakMap();

class TypeList extends Object {
    constructor(...args) {
        super();

        let proxy = this._createProxy({
            get: function (target, prop, receiver) {
                let index;
                try {
                    index = parseInt(prop);
                } catch (e) { }
                if (!isNaN(index)) {
                    if (index < 0 || index > proxy.Length - 1) {
                        throw new RangeError('Argument out of range');
                    } else {
                        return proxy._getPrivateVar('_list')[index];
                    }
                }
                return target[prop];
            },
            set: function (target, prop, value, receiver) {
                let index;
                try {
                    index = parseInt(prop);
                } catch (e) { }
                if (!isNaN(index)) {
                    if (index < 0 || index > proxy.Length - 1) {
                        throw new RangeError('Argument out of range');
                    } else {
                        if (typeof value === 'object' && value instanceof proxy._getPrivateVar('_type')) {
                            proxy._getPrivateVar('_list')[index] = value;
                            return true;
                        } else {
                            throw new TypeError('Type error');
                        }
                    }
                }
                target[prop] = value;
                return true;
            }
        });
        this._setPrivateVar('_proxy', proxy);

        (TypeList.prototype.constructor._init || (TypeList.prototype.constructor._init = Overload.Create().
            Add([Function], function (type) {
                this[Symbol.name] = 'TypeList';
                this[Symbol.toPrimitive] = type.name;
                this._setPrivateVar('_type', type);
                this._setPrivateVar('_list', new Array());
            }).
            Add([Function, Array], function (type, collection) {
                this[Symbol.name] = 'TypeList';
                this[Symbol.toPrimitive] = type.name;
                this._setPrivateVar('_type', type);
                this._setPrivateVar('_list', new Array());
                for (let i = 0; i < collection.length; i++) {
                    this.Add(collection[i]);
                }
            }).
            Add([Function, Number], function (type, capacity) {
                this[Symbol.name] = 'TypeList';
                this[Symbol.toPrimitive] = type.name;
                this._setPrivateVar('_type', type);
                this._setPrivateVar('_list', new Array(capacity));
            })
        )).call(this, ...args);

        return proxy;
    }

    static T(...args) {
        return (
            TypeList.T = Overload.Create().
                Add(['*'], function (type) {
                    let proxy = cacheTypeProxys.get(type);
                    if (!proxy) {
                        proxy = new Proxy(TypeList, {
                            get: function (target, prop) {
                                if (prop === Symbol.toPrimitive) {
                                    return type.name;
                                }
                                return target[prop];
                            }
                        });
                        cacheTypeProxys.set(type, proxy);
                    }
                    return proxy;
                })
        ).call(this, ...args);
    }

    get Length() {
        return this._getPrivateVar('_list').length;
    }

    get Count() {
        return this.Length;
    }

    Add(...args) {
        return (
            TypeList.prototype.Add = Overload.Create().
                Add(['*'], function (item) {
                    let list = this._getPrivateVar('_list');
                    list.push(item);
                })
        ).call(this, ...args);
    }

    AddRange(...args) {
        return (
            TypeList.prototype.AddRange = Overload.Create().
                Add([Array], function (arr) {
                    let list = this._getPrivateVar('_list');
                    arr.map((value, index) => {
                        list.push(value);
                    });
                })
        ).call(this, ...args);
    }

    ForEach(...args) {
        return (
            TypeList.prototype.ForEach = Overload.Create().
                Add([Function], function (fn) {
                    this._getPrivateVar('_list').forEach(fn);
                })
        ).call(this, ...args);
    }

    Clear(...args) {
        return (
            TypeList.prototype.Clear = Overload.Create().
                Add([], function () {
                    let list = this._getPrivateVar('_list');
                    list.length = 0;
                })
        ).call(this, ...args);
    }

    Contains(...args) {
        return (
            TypeList.prototype.Contains = Overload.Create().
                Add(['*'], function (value) {
                    return this.IndexOf(value) >= 0;
                })
        ).call(this, ...args);
    }

    IndexOf(...args) {
        return (
            TypeList.prototype.IndexOf = Overload.Create().
                Add(['*'], function (value) {
                    let list = this._getPrivateVar('_list');
                    for (let i = list.length; i--;) {
                        if (list[i].Equals(value)) return i;
                    }
                    return -1;
                })
        ).call(this, ...args);
    }

    Insert(...args) {
        return (
            TypeList.prototype.Insert = Overload.Create().
                Add([Number, '*'], function (index, value) {
                    let list = this._getPrivateVar('_list');
                    if (index > list.length) index = list.length;
                    if (index < -list.length) index = 0;
                    if (index < 0) index = list.length + index;
                    for (let i = list.length; i > index; i--) {
                        list[i] = list[i - 1];
                    }
                    list[index] = value;
                })
        ).call(this, ...args);
    }

    Remove(...args) {
        return (
            TypeList.prototype.Remove = Overload.Create().
                Add(['*'], function (value) {
                    let list = this._getPrivateVar('_list');
                    for (let i = list.length; i--;) {
                        if (list[i] === value) {
                            this.RemoveAt(i);
                            break;
                        }
                    }
                })
        ).call(this, ...args);
    }

    RemoveAt(...args) {
        return (
            TypeList.prototype.RemoveAt = Overload.Create().
                Add([Number], function (index) {
                    let list = this._getPrivateVar('_list');
                    if (index < 0 || index > list.length - 1) {
                        throw new RangeError('Argument out of range');
                    }
                    this._setPrivateVar('_list', list.slice(0, index).concat(list.slice(index + 1, list.length)));
                })
        ).call(this, ...args);
    }

    ToArray(...args) {
        return (
            TypeList.prototype.ToArray = Overload.Create().
                Add([], function () {
                    let _list = this._getPrivateVar('_list');
                    let list = [];
                    for (let i = 0; i < _list.length; i++) {
                        list[i] = _list[i];
                    }
                    return list;
                })
        ).call(this, ...args);
    }

    toJSON() {
        return super.toJSON(this.ToArray());
    }

    static fromJSON() {
        throw new EvalError('TypeList base class does not support deserialization');
    }
}

export default TypeList;