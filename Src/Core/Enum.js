import Object from '../Core/Object.js';
import Overload from './Overload.js';

const enums = new Map();

class Enum extends Object {
    constructor(...args) {
        super();

        (Enum.prototype.constructor._init || (Enum.prototype.constructor._init = Overload.Create().
            Add([String], function (key) {
                this._setPrivateVar('_enum', key);
            }).
            Add([String, Number], function (key, value) {
                this._setPrivateVar('_enum', key);
                this._setPrivateVar('_value', value);
            })
        )).call(this, ...args);
    }

    [Symbol.toPrimitive](hint) {
        const value = this._getPrivateVar('_value');
        if (hint === 'number' && typeof value !== 'undefined') {
            return value;
        }
        return super[Symbol.toPrimitive];
    }

    ToString() {
        return (
            Enum.prototype.ToString = Overload.Create().
                Add([], function () {
                    return this._getPrivateVar('_enum');
                })
        ).call(this, ...args);
    }

    toString() {
        return this.ToString();
    }

    Serialize(...args) {
        const superSerialize = super.Serialize;
        return (
            Enum.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        _enum: this._getPrivateVar('_enum')
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            Enum.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (!this[obj['_enum']]) {
                        throw new TypeError('Unrecognized type');
                    }
                    return this[obj['_enum']];
                })
        ).call(this, ...args);
    }
}

export default Enum;