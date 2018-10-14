import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import Point from './Point.js';

class Rectangle extends Object {
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
            },
            Width: {
                get: () => {
                    return this._getPrivateVar('_width');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_width', value | 0);
                    })
            },
            Height: {
                get: () => {
                    return this._getPrivateVar('_height');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_height', value | 0);
                    })
            },
            Location: {
                get: () => {
                    return new Point(this.X, this.Y);
                },
                set: Overload.Create().
                    Add([Point], (value) => {
                        this.X = value.X;
                        this.Y = value.Y;
                    })
            }
        });

        (Rectangle.prototype.constructor._init || (Rectangle.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.X = 0;
                this.Y = 0;
                this.Width = 0;
                this.Height = 0;
            }).
            Add([Number, Number, Number, Number], function (x, y, width, height) {
                this.X = x;
                this.Y = y;
                this.Width = width;
                this.Height = height;
            })
        )).call(this, ...args);
    }

    static get [Symbol.name]() {
        return 'Rectangle';
    }

    get Bottom() {
        return this.Y + this.Height;
    }

    get Center() {
        return new Point(this.X + (this.Width / 2), this.Y + (this.Height / 2));
    }

    static get Empty() {
        return new Rectangle(0, 0, 0, 0);
    }

    get IsEmpty() {
        return (this.X === 0 &&
            this.Y === 0 &&
            this.Width === 0 &&
            this.Height === 0);
    }

    get Left() {
        return this.X;
    }

    get Right() {
        return this.X + this.Width;
    }

    get Top() {
        return this.Y;
    }

    Contains(...args) {
        return (
            Rectangle.prototype.Contains = Overload.Create().
                Add([Number, Number], function (x, y) {
                    return ((((this.X <= x) && (x < (this.X + this.Width))) && (this.Y <= y)) && (y < (this.Y + this.Height)));
                }).
                Add([Point], function (value) {
                    return ((((this.X <= value.X) && (value.X < (this.X + this.Width))) && (this.Y <= value.Y)) && (value.Y < (this.Y + this.Height)));
                }).
                Add([Rectangle], function (value) {
                    return ((((this.X <= value.X) && ((value.X + value.Width) <= (this.X + this.Width))) && (this.Y <= value.Y)) && ((value.Y + value.Height) <= (this.Y + this.Height)));
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            Rectangle.prototype.Equals = Overload.Create().
                Add([Rectangle], function (other) {
                    return (Math.abs(this.X - other.X) < 1e-6 && Math.abs(this.Y - other.Y) < 1e-6) &&
                        (Math.abs(this.Width - other.Width) < 1e-6 && Math.abs(this.Height - other.Height) < 1e-6);
                }).Add(['*'], function (value) {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Rectangle.prototype.GetType = Overload.Create().
                Add([], function () {
                    var hash = 17;
                    hash = hash * 23 + this.X;
                    hash = hash * 23 + this.Y;
                    hash = hash * 23 + this.Width;
                    hash = hash * 23 + this.Height;
                    return hash;
                })
        ).call(this, ...args);
    }

    GetType(...args) {
        return (
            Rectangle.prototype.GetType = Overload.Create().
                Add([], function () {
                    return Rectangle;
                })
        ).call(this, ...args);
    }

    Inflate(...args) {
        return (
            Rectangle.prototype.Inflate = Overload.Create().
                Add([Number, Number], function (horizontalAmount, verticalAmount) {
                    this.X -= horizontalAmount;
                    this.Y -= verticalAmount;
                    this.Width += horizontalAmount * 2;
                    this.Height += verticalAmount * 2;
                })
        ).call(this, ...args);
    }

    static Intersect(...args) {
        return (
            Rectangle.Intersect = Overload.Create().
                Add([Rectangle, Rectangle], function (value1, value2) {
                    if (value1.Intersects(value2)) {
                        var right_side = Math.min(value1.X + value1.Width, value2.X + value2.Width);
                        var left_side = Math.max(value1.X, value2.X);
                        var top_side = Math.max(value1.Y, value2.Y);
                        var bottom_side = Math.min(value1.Y + value1.Height, value2.Y + value2.Height);
                        return new Rectangle(left_side, top_side, right_side - left_side, bottom_side - top_side);
                    }
                    else {
                        return Rectangle.Empty;
                    }
                })
        ).call(this, ...args);
    }

    Intersects(...args) {
        return (
            Rectangle.prototype.Intersects = Overload.Create().
                Add([Rectangle], function (value) {
                    return value.Left < this.Right &&
                        this.Left < value.Right &&
                        value.Top < this.Bottom &&
                        this.Top < value.Bottom;
                })
        ).call(this, ...args);
    }

    Offset(...args) {
        return (
            Rectangle.prototype.Offset = Overload.Create().
                Add([Number, Number], function (offsetX, offsetY) {
                    this.X += offsetX;
                    this.Y += offsetY;
                }).
                Add([Point], function (amount) {
                    this.X += amount.X;
                    this.Y += amount.Y;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Rectangle.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{X:${this.X} Y:${this.Y} Width:${this.Width} Height:${this.Height}}`;
                })
        ).call(this, ...args);
    }

    static Union(...args) {
        return (
            Rectangle.prototype.Union = Overload.Create().
                Add([Rectangle, Rectangle], function (value1, value2) {
                    var x = Math.min(value1.X, value2.X);
                    var y = Math.min(value1.Y, value2.Y);
                    return new Rectangle(x, y,
                        Math.max(value1.Right, value2.Right) - x,
                        Math.max(value1.Bottom, value2.Bottom) - y);
                })
        ).call(this, ...args);
    }

    toJSON() {
        return super.toJSON({
            X: this.X,
            Y: this.Y,
            Width: this.Width,
            Height: this.Height
        });
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (obj['Symbol'] !== Rectangle[Symbol.name]) {
            throw new TypeError('Unrecognized type');
        }
        return new Rectangle(obj.X, obj.Y, obj.Width, obj.Height);
    }
}

export default Rectangle;