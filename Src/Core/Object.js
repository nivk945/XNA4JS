import Overload from './Overload.js';
import IPrivateVar from '../Interface/IPrivateVar.js';

class Object extends IPrivateVar {
    constructor() {
        super();
        this[Symbol.name] = this.constructor.name;
    }

    static get [Symbol.name]() {
        return 'Object';
    }

    ToString(...args) {
        return (
            Object.prototype.ToString = Overload.Create().
                Add([], function () {
                    return this.constructor.name;
                })
        ).call(this, ...args);
    }

    toString(...args) {
        return this.ToString(...args);
    }

    toJSON(...args) {
        return (
            Object.prototype.toJSON = Overload.Create().
                Add([], function () {
                    return { [Symbol.name]: this[Symbol.name] };
                }).
                Add([String], function (str) {
                    return { [Symbol.name]: this[Symbol.name] };
                }).
                Add([window.Object], function (obj) {
                    obj[Symbol.name] = this[Symbol.name];
                    return obj;
                })
        ).call(this, ...args);
    }

    static fromJSON() { }

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