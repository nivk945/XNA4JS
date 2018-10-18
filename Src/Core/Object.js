import Overload from './Overload.js';
import IPrivateVar from '../Interface/IPrivateVar.js';

class Object extends IPrivateVar {
    constructor() {
        super();
    }

    [Symbol.toPrimitive](hint) {
        throw new TypeError('Prohibit implicit conversion');
    }

    static get [Symbol.toStringTag]() {
        return [this.name];
    }

    static ToString(...args) {
        return (
            Object.ToString = Overload.Create().
                Add([], function () {
                    return `[class ${this[Symbol.toStringTag]}]`;
                })
        ).call(this, ...args);
    }

    static toString(...args) {
        return this.ToString(...args);
    }

    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }

    ToString(...args) {
        return (
            Object.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `[object ${this.constructor.name}]`;
                })
        ).call(this, ...args);
    }

    toString(...args) {
        return this.ToString(...args);
    }

    Serialize(...args) {
        return (
            Object.prototype.Serialize = Overload.Create().
                Add([], function () {
                    return { ['Symbol']: this[Symbol.toStringTag] };
                }).
                Add([String], function (str) {
                    return { ['Symbol']: this[Symbol.toStringTag] };
                }).
                Add([window.Object], function (obj) {
                    obj['Symbol'] = this[Symbol.toStringTag];
                    return obj;
                })
        ).call(this, ...args);
    }

    toJSON(...args) {
        return this.Serialize(...args);
    }

    static Deserialize() {
        throw new EvalError('Base class does not support deserialization');
    }

    Equals(...args) {
        return (
            Object.prototype.Equals = Overload.Create().
                Add([Object], function (obj) {
                    return this === obj;
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    static Equals(...args) {
        return (
            Object.Equals = Overload.Create().
                Add([Object, Object], function (objA, objB) {
                    if (objA === objB) {
                        return true;
                    }
                    if (objA == null || objB == null) {
                        return false;
                    }
                    return objA.Equals(objB);
                }).
                Add(['*', '*'], function (value1, value2) {
                    return value1 === value2;
                })
        ).call(this, ...args);
    }

    static ReferenceEquals(...args) {
        return (
            Object.ReferenceEquals = Overload.Create().
                Add([Object, Object], function (objA, objB) {
                    return objA === objB;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Object.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    let obj = {};
                    for (const p of window.Object.getOwnPropertyNames(this)) {
                        obj[p] = this[p];
                    }
                    let str = JSON.stringify(obj);
                    let h = 0;
                    let len = str.length;
                    let t = 2147483648;
                    for (let i = 0; i < len; i++) {
                        h = 31 * h + str.charCodeAt(i);
                        if (h > 2147483647) h %= t;
                    }
                    return h;
                })
        ).call(this, ...args);
    }

    GetType(...args) {
        return (
            Object.prototype.GetType = Overload.Create().
                Add([], function () {
                    return this.constructor;
                })
        ).call(this, ...args);
    }

    MemberwiseClone(...args) {
        return (
            Object.prototype.MemberwiseClone = Overload.Create().
                Add([], function () {
                    let newObj = new Object();
                    for (const i in this) {
                        newObj[i] = this[i];
                    }
                    return newObj;
                })
        ).call(this, ...args);
    }
}

export default Object;