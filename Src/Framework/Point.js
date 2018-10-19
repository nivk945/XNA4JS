import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';

class Point extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            X: {
                get: () => {
                    return this._getPrivateVar('_x');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_x', value | 0);
                    })
            },
            Y: {
                get: () => {
                    return this._getPrivateVar('_y');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_y', value | 0);
                    })
            }
        });

        (Point.prototype.constructor._init || (Point.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.X = 0;
                this.Y = 0;
            }).
            Add([Number, Number], function (x, y) {
                this.X = x;
                this.Y = y;
            })
        )).call(this, ...args);
    }

    static get Zero() {
        return new Point();
    }

    Equals(...args) {
        return (
            Point.prototype.Equals = Overload.Create().
                Add([Point], function (other) {
                    return (Math.abs(this.X - other.X) < 1e-6 && Math.abs(this.Y - other.Y) < 1e-6);
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Point.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    var hash = 17;
                    hash = hash * 23 + +this.X;
                    hash = hash * 23 + +this.Y;
                    return hash;
                })
        ).call(this, ...args);
    }

    GetType(...args) {
        return (
            Point.prototype.GetType = Overload.Create().
                Add([], function () {
                    return Point;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Point.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{X:${this.X} Y:${this.Y}`;
                })
        ).call(this, ...args);
    }

    Serialize(...args) {
        const superSerialize = super.Serialize;
        return (
            Point.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        X: this.X,
                        Y: this.Y
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            Point.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== Point.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    return new Point(obj.X, obj.Y);
                })
        ).call(this, ...args);
    }
}

export default Point;