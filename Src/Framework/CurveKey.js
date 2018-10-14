import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import CurveContinuity from './CurveContinuity.js';

class CurveKey extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            Continuity: {
                get: () => {
                    return this._getPrivateVar('_continuity');
                },
                set: Overload.Create().
                    Add([CurveContinuity], (value) => {
                        this._setPrivateVar('_continuity', value);
                    })
            },
            TangentIn: {
                get: () => {
                    return this._getPrivateVar('_tangentIn');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_tangentIn', value);
                    })
            },
            TangentOut: {
                get: () => {
                    return this._getPrivateVar('_tangentOut');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_tangentOut', value);
                    })
            },
            Value: {
                get: () => {
                    return this._getPrivateVar('_value');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_value', value);
                    })
            }
        });

        (CurveKey.prototype.constructor._init || (CurveKey.prototype.constructor._init = Overload.Create().
            Add([], function () {
                CurveKey.prototype.constructor._init.call(this, 0, 0);
            }).
            Add([Number, Number], function (position, value) {
                CurveKey.prototype.constructor._init.call(this, position, value, 0, 0, CurveContinuity.Smooth);
            }).
            Add([Number, Number, Number, Number], function (position, value, tangentIn, tangentOut) {
                CurveKey.prototype.constructor._init.call(this, position, value, tangentIn, tangentOut, CurveContinuity.Smooth);
            }).
            Add([Number, Number, Number, Number, CurveContinuity], function (position, value, tangentIn, tangentOut, continuity) {
                this._setPrivateVar('_position', position);
                this.Value = value;
                this.TangentIn = tangentIn;
                this.TangentOut = tangentOut;
                this.Continuity = continuity;
            })
        )).call(this, ...args);
    }

    get Position() {
        return this._getPrivateVar('_position');
    }

    Clone(...args) {
        return (
            CurveKey.prototype.Clone = Overload.Create().
                Add([], function () {
                    return new CurveKey(this.Position, this.Value, this.TangentIn, this.TangentOut, this.Continuity);
                })
        ).call(this, ...args);
    }

    CompareTo(...args) {
        return (
            CurveKey.prototype.CompareTo = Overload.Create().
                Add([CurveKey], function (other) {
                    if (this.Position < other.Position || (isNaN(this.Position) && !isNaN(other.Position))) {
                        return -1;
                    } else if (this.Position === other.Position || (isNaN(this.Position) && isNaN(other.Position))) {
                        return 0;
                    } else if (this.Position > other.Position || (!isNaN(this.Position) && isNaN(other.Position))) {
                        return 1;
                    }
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            CurveKey.prototype.Equals = Overload.Create().
                Add([CurveKey], function (other) {
                    return (this.Position == other.Position)
                        && (this.Value == other.Value)
                        && (this.TangentIn == other.TangentIn)
                        && (this.TangentOut == other.TangentOut)
                        && (this.Continuity == other.Continuity);
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            CurveKey.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    return this.Position ^ this.Value ^ this.TangentIn ^
                        this.TangentOut ^ this.Continuity.GetHashCode();
                })
        ).call(this, ...args);
    }

    Serialize(...args) {
        let superSerialize = super.Serialize;
        return (
            CurveKey.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        Continuity: this.Continuity,
                        _position: this.Position,
                        TangentIn: this.TangentIn,
                        TangentOut: this.TangentOut,
                        Value: this.Value
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            CurveKey.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== CurveKey.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    let continuity = CurveContinuity.Deserialize(obj.Continuity);
                    return new CurveKey(obj._position, obj.Value, obj.TangentIn, obj.TangentOut, continuity);
                })
        ).call(this, ...args);
    }
}

export default CurveKey;