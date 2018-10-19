import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector2 from './Vector2.js';
import Vector3 from './Vector3.js';
import Matrix from './Matrix.js';

class Quaternion extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            X: {
                get: () => {
                    return this._getPrivateVar('_x');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_x', value);
                    })
            },
            Y: {
                get: () => {
                    return this._getPrivateVar('_y');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_y', value);
                    })
            },
            Z: {
                get: () => {
                    return this._getPrivateVar('_z');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_z', value);
                    })
            },
            W: {
                get: () => {
                    return this._getPrivateVar('_w');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_w', value);
                    })
            }
        });

        (Quaternion.prototype.constructor._init || (Quaternion.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.X = 0;
                this.Y = 0;
                this.Z = 0;
                this.W = 0;
            }).
            Add([Number], function (value) {
                this.X = value;
                this.Y = value;
                this.Z = value;
                this.W = value;
            }).
            Add([Number, Number, Number, Number], function (x, y, z, w) {
                this.X = x;
                this.Y = y;
                this.Z = z;
                this.W = w;
            }).
            Add([Vector3, Number], function (value, w) {
                this.X = value.X;
                this.Y = value.Y;
                this.Z = value.Z
                this.W = w;
            })
        )).call(this, ...args);
    }

    static get Identity() {
        return new Quaternion(0, 0, 0, 1);
    }

    static Add(...args) {
        return (
            Quaternion.Add = Overload.Create().
                Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                    var quaternion = new Quaternion();
                    quaternion.X = quaternion1.X + quaternion2.X;
                    quaternion.Y = quaternion1.Y + quaternion2.Y;
                    quaternion.Z = quaternion1.Z + quaternion2.Z;
                    quaternion.W = quaternion1.W + quaternion2.W;
                    return quaternion;
                })
        ).call(this, ...args);
    }

    static Concatenate(...args) {
        return (
            Quaternion.Concatenate = Overload.Create().
                Add([Quaternion, Quaternion], function (value1, value2) {
                    let quaternion = new Quaternion();

                    let x1 = value1.X;
                    let y1 = value1.Y;
                    let z1 = value1.Z;
                    let w1 = value1.W;

                    let x2 = value2.X;
                    let y2 = value2.Y;
                    let z2 = value2.Z;
                    let w2 = value2.W;

                    quaternion.X = ((x2 * w1) + (x1 * w2)) + ((y2 * z1) - (z2 * y1));
                    quaternion.Y = ((y2 * w1) + (y1 * w2)) + ((z2 * x1) - (x2 * z1));
                    quaternion.Z = ((z2 * w1) + (z1 * w2)) + ((x2 * y1) - (y2 * x1));
                    quaternion.W = (w2 * w1) - (((x2 * x1) + (y2 * y1)) + (z2 * z1));

                    return quaternion;
                })
        ).call(this, ...args);
    }

    static Conjugate(...args) {
        return (
            Quaternion.Conjugate = Overload.Create().
                Add([Quaternion], function (value) {
                    return new Quaternion(-value.X, -value.Y, -value.Z, value.W);
                })
        ).call(this, ...args);
    }

    Conjugate(...args) {
        return (
            Quaternion.prototype.Conjugate = Overload.Create().
                Add([], function () {
                    this.X = -this.X;
                    this.Y = -this.Y;
                    this.Z = -this.Z;
                })
        ).call(this, ...args);
    }

    static CreateFromAxisAngle(...args) {
        return (
            Quaternion.CreateFromAxisAngle = Overload.Create().
                Add([Vector3, Number], function (axis, angle) {
                    let half = angle * 0.5;
                    let sin = Math.sin(half);
                    let cos = Math.cos(half);
                    return new Quaternion(axis.X * sin, axis.Y * sin, axis.Z * sin, cos);
                })
        ).call(this, ...args);
    }

    static CreateFromRotationMatrix(...args) {
        return (
            Quaternion.CreateFromRotationMatrix = Overload.Create().
                Add([Matrix], function (matrix) {
                    let quaternion = new Quaternion();
                    let sqrt;
                    let half;
                    let scale = matrix.M11 + matrix.M22 + matrix.M33;

                    if (scale > 0.0) {
                        sqrt = Math.sqrt(scale + 1.0);
                        quaternion.W = sqrt * 0.5;
                        sqrt = 0.5 / sqrt;

                        quaternion.X = (matrix.M23 - matrix.M32) * sqrt;
                        quaternion.Y = (matrix.M31 - matrix.M13) * sqrt;
                        quaternion.Z = (matrix.M12 - matrix.M21) * sqrt;

                        return quaternion;
                    }
                    if ((matrix.M11 >= matrix.M22) && (matrix.M11 >= matrix.M33)) {
                        sqrt = Math.sqrt(1.0 + matrix.M11 - matrix.M22 - matrix.M33);
                        half = 0.5 / sqrt;

                        quaternion.X = 0.5 * sqrt;
                        quaternion.Y = (matrix.M12 + matrix.M21) * half;
                        quaternion.Z = (matrix.M13 + matrix.M31) * half;
                        quaternion.W = (matrix.M23 - matrix.M32) * half;

                        return quaternion;
                    }
                    if (matrix.M22 > matrix.M33) {
                        sqrt = Math.sqrt(1.0 + matrix.M22 - matrix.M11 - matrix.M33);
                        half = 0.5 / sqrt;

                        quaternion.X = (matrix.M21 + matrix.M12) * half;
                        quaternion.Y = 0.5 * sqrt;
                        quaternion.Z = (matrix.M32 + matrix.M23) * half;
                        quaternion.W = (matrix.M31 - matrix.M13) * half;

                        return quaternion;
                    }
                    sqrt = Math.sqrt(1.0 + matrix.M33 - matrix.M11 - matrix.M22);
                    half = 0.5 / sqrt;

                    quaternion.X = (matrix.M31 + matrix.M13) * half;
                    quaternion.Y = (matrix.M32 + matrix.M23) * half;
                    quaternion.Z = 0.5 * sqrt;
                    quaternion.W = (matrix.M12 - matrix.M21) * half;

                    return quaternion;
                })
        ).call(this, ...args);
    }

    static CreateFromYawPitchRoll(...args) {
        return (
            Quaternion.CreateFromYawPitchRoll = Overload.Create().
                Add([Number, Number, Number], function (yaw, pitch, roll) {
                    let halfRoll = roll * 0.5;
                    let halfPitch = pitch * 0.5;
                    let halfYaw = yaw * 0.5;

                    let sinRoll = Math.sin(halfRoll);
                    let cosRoll = Math.cos(halfRoll);
                    let sinPitch = Math.sin(halfPitch);
                    let cosPitch = Math.cos(halfPitch);
                    let sinYaw = Math.sin(halfYaw);
                    let cosYaw = Math.cos(halfYaw);

                    return new Quaternion((cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll),
                        (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll),
                        (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll),
                        (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll));
                })
        ).call(this, ...args);
    }

    static Divide(...args) {
        return (
            Quaternion.Divide = Overload.Create().
                Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                    let quaternion = new Quaternion();
                    let x = quaternion1.X;
                    let y = quaternion1.Y;
                    let z = quaternion1.Z;
                    let w = quaternion1.W;
                    let num14 = (((quaternion2.X * quaternion2.X) + (quaternion2.Y * quaternion2.Y)) + (quaternion2.Z * quaternion2.Z)) + (quaternion2.W * quaternion2.W);
                    let num5 = 1 / num14;
                    let num4 = -quaternion2.X * num5;
                    let num3 = -quaternion2.Y * num5;
                    let num2 = -quaternion2.Z * num5;
                    let num = quaternion2.W * num5;
                    let num13 = (y * num2) - (z * num3);
                    let num12 = (z * num4) - (x * num2);
                    let num11 = (x * num3) - (y * num4);
                    let num10 = ((x * num4) + (y * num3)) + (z * num2);
                    quaternion.X = ((x * num) + (num4 * w)) + num13;
                    quaternion.Y = ((y * num) + (num3 * w)) + num12;
                    quaternion.Z = ((z * num) + (num2 * w)) + num11;
                    quaternion.W = (w * num) - num10;
                    return quaternion;
                })
        ).call(this, ...args);
    }

    static Dot(...args) {
        return (
            Quaternion.Dot = Overload.Create().
                Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                    return ((((quaternion1.X * quaternion2.X) + (quaternion1.Y * quaternion2.Y)) + (quaternion1.Z * quaternion2.Z)) + (quaternion1.W * quaternion2.W));
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            Quaternion.prototype.Equals = Overload.Create().
                Add([Quaternion], function (obj) {
                    return ((this.X == obj.X) && (this.Y == obj.Y) && (this.Z == obj.Z) && (this.W == obj.W));
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Quaternion.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    return this.X + this.Y + this.Z + this.W;
                })
        ).call(this, ...args);
    }

    static Inverse(...args) {
        return (
            Quaternion.Inverse = Overload.Create().
                Add([Quaternion], function (quaternion) {
                    var quaternion2 = new Quaternion();
                    var num2 = (((quaternion.X * quaternion.X) + (quaternion.Y * quaternion.Y)) + (quaternion.Z * quaternion.Z)) + (quaternion.W * quaternion.W);
                    var num = 1 / num2;
                    quaternion2.X = -quaternion.X * num;
                    quaternion2.Y = -quaternion.Y * num;
                    quaternion2.Z = -quaternion.Z * num;
                    quaternion2.W = quaternion.W * num;
                    return quaternion2;
                })
        ).call(this, ...args);
    }

    Length(...args) {
        return (
            Quaternion.prototype.Length = Overload.Create().
                Add([], function () {
                    return Math.sqrt((this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W));
                })
        ).call(this, ...args);
    }

    LengthSquared(...args) {
        return (
            Quaternion.prototype.LengthSquared = Overload.Create().
                Add([], function () {
                    return (this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W);
                })
        ).call(this, ...args);
    }

    static Lerp(...args) {
        return (
            Quaternion.Lerp = Overload.Create().
                Add([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
                    let num = amount;
                    let num2 = 1 - num;
                    let quaternion = new Quaternion();
                    let num5 = (((quaternion1.X * quaternion2.X) + (quaternion1.Y * quaternion2.Y)) + (quaternion1.Z * quaternion2.Z)) + (quaternion1.W * quaternion2.W);
                    if (num5 >= 0) {
                        quaternion.X = (num2 * quaternion1.X) + (num * quaternion2.X);
                        quaternion.Y = (num2 * quaternion1.Y) + (num * quaternion2.Y);
                        quaternion.Z = (num2 * quaternion1.Z) + (num * quaternion2.Z);
                        quaternion.W = (num2 * quaternion1.W) + (num * quaternion2.W);
                    }
                    else {
                        quaternion.X = (num2 * quaternion1.X) - (num * quaternion2.X);
                        quaternion.Y = (num2 * quaternion1.Y) - (num * quaternion2.Y);
                        quaternion.Z = (num2 * quaternion1.Z) - (num * quaternion2.Z);
                        quaternion.W = (num2 * quaternion1.W) - (num * quaternion2.W);
                    }
                    var num4 = (((quaternion.X * quaternion.X) + (quaternion.Y * quaternion.Y)) + (quaternion.Z * quaternion.Z)) + (quaternion.W * quaternion.W);
                    var num3 = 1 / (Math.sqrt(num4));
                    quaternion.X *= num3;
                    quaternion.Y *= num3;
                    quaternion.Z *= num3;
                    quaternion.W *= num3;
                    return quaternion;
                })
        ).call(this, ...args);
    }

    static Multiply(...args) {
        return (
            Quaternion.Multiply = Overload.Create().
                Add([Quaternion, Number], function (quaternion1, scaleFactor) {
                    let quaternion = new Quaternion();
                    quaternion.X = quaternion1.X * scaleFactor;
                    quaternion.Y = quaternion1.Y * scaleFactor;
                    quaternion.Z = quaternion1.Z * scaleFactor;
                    quaternion.W = quaternion1.W * scaleFactor;
                    return quaternion;
                }).
                Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                    let quaternion = new Quaternion();
                    let x = quaternion1.X;
                    let y = quaternion1.Y;
                    let z = quaternion1.Z;
                    let w = quaternion1.W;
                    let num4 = quaternion2.X;
                    let num3 = quaternion2.Y;
                    let num2 = quaternion2.Z;
                    let num = quaternion2.W;
                    let num12 = (y * num2) - (z * num3);
                    let num11 = (z * num4) - (x * num2);
                    let num10 = (x * num3) - (y * num4);
                    let num9 = ((x * num4) + (y * num3)) + (z * num2);
                    quaternion.X = ((x * num) + (num4 * w)) + num12;
                    quaternion.Y = ((y * num) + (num3 * w)) + num11;
                    quaternion.Z = ((z * num) + (num2 * w)) + num10;
                    quaternion.W = (w * num) - num9;
                    return quaternion;
                })
        ).call(this, ...args);
    }

    static Negate(...args) {
        return (
            Quaternion.Negate = Overload.Create().
                Add([Quaternion], function (quaternion) {
                    return new Quaternion(-quaternion.X, -quaternion.Y, -quaternion.Z, -quaternion.W);
                })
        ).call(this, ...args);
    }

    static Normalize(...args) {
        return (
            Quaternion.Normalize = Overload.Create().
                Add([Quaternion], function (quaternion) {
                    let result = new Quaternion();
                    let num = 1 / (Math.sqrt((quaternion.X * quaternion.X) + (quaternion.Y * quaternion.Y) + (quaternion.Z * quaternion.Z) + (quaternion.W * quaternion.W)));
                    result.X = quaternion.X * num;
                    result.Y = quaternion.Y * num;
                    result.Z = quaternion.Z * num;
                    result.W = quaternion.W * num;
                    return result;
                })
        ).call(this, ...args);
    }

    Normalize(...args) {
        return (
            Quaternion.prototype.Normalize = Overload.Create().
                Add([], function () {
                    let num = 1 / (Math.sqrt((this.X * this.X) + (this.Y * this.Y) + (this.Z * this.Z) + (this.W * this.W)));
                    this.X *= num;
                    this.Y *= num;
                    this.Z *= num;
                    this.W *= num;
                })
        ).call(this, ...args);
    }

    static Slerp(...args) {
        return (
            Quaternion.Slerp = Overload.Create().
                Add([Quaternion, Quaternion, Number], function (quaternion1, quaternion2, amount) {
                    let num2;
                    let num3;
                    let quaternion = new Quaternion();
                    let num = amount;
                    let num4 = (((quaternion1.X * quaternion2.X) + (quaternion1.Y * quaternion2.Y)) + (quaternion1.Z * quaternion2.Z)) + (quaternion1.W * quaternion2.W);
                    let flag = false;
                    if (num4 < 0) {
                        flag = true;
                        num4 = -num4;
                    }
                    if (num4 > 0.999999) {
                        num3 = 1 - num;
                        num2 = flag ? -num : num;
                    }
                    else {
                        let num5 = Math.acos(num4);
                        let num6 = (1.0 / Math.sin(num5));
                        num3 = (Math.sin(((1 - num) * num5))) * num6;
                        num2 = flag ? ((-Math.sin((num * num5))) * num6) : ((Math.sin((num * num5))) * num6);
                    }
                    quaternion.X = (num3 * quaternion1.X) + (num2 * quaternion2.X);
                    quaternion.Y = (num3 * quaternion1.Y) + (num2 * quaternion2.Y);
                    quaternion.Z = (num3 * quaternion1.Z) + (num2 * quaternion2.Z);
                    quaternion.W = (num3 * quaternion1.W) + (num2 * quaternion2.W);
                    return quaternion;
                })
        ).call(this, ...args);
    }

    static Subtract(...args) {
        return (
            Quaternion.Subtract = Overload.Create().
                Add([Quaternion, Quaternion], function (quaternion1, quaternion2) {
                    let quaternion = new Quaternion();
                    quaternion.X = quaternion1.X - quaternion2.X;
                    quaternion.Y = quaternion1.Y - quaternion2.Y;
                    quaternion.Z = quaternion1.Z - quaternion2.Z;
                    quaternion.W = quaternion1.W - quaternion2.W;
                    return quaternion;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Quaternion.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{X:${this.X} Y:${this.Y} Z:${this.Z} W:${this.W}}`;
                })
        ).call(this, ...args);
    }
    
    Serialize(...args) {
        const superSerialize = super.Serialize;
        return (
            Quaternion.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        X: this.X,
                        Y: this.Y,
                        Z: this.Z,
                        W: this.W
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            Quaternion.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== Quaternion.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    return new Quaternion(obj.X, obj.Y, obj.Z, obj.W);
                })
        ).call(this, ...args);
    }
}

export default Quaternion;