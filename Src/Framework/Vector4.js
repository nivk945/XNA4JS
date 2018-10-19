import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector2 from './Vector2.js';
import Vector3 from './Vector3.js';
import Quaternion from './Quaternion.js';
import Matrix from './Matrix.js';
import TypeList from '../Core/TypeList.js';

class Vector4 extends Object {
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

        (Vector4.prototype.constructor._init || (Vector4.prototype.constructor._init = Overload.Create().
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
            Add([Vector2, Number, Number], function (value, z, w) {
                this.X = value.X;
                this.Y = value.Y;
                this.Z = z;
                this.W = w;
            }).
            Add([Vector3, Number], function (value, w) {
                this.X = value.X;
                this.Y = value.Y;
                this.Z = value.Z;
                this.W = w;
            })
        )).call(this, ...args);
    }
    
    static get One() {
        return new Vector4(1, 1, 1, 1);
    }

    static get UnitW() {
        return new Vector4(0, 0, 0, 1);
    }

    static get UnitX() {
        return new Vector4(1, 0, 0, 0);
    }

    static get UnitY() {
        return new Vector4(0, 1, 0, 0);
    }

    static get UnitZ() {
        return new Vector4(0, 0, 1, 0);
    }

    static get Zero() {
        return new Vector4(0, 0, 0, 0);
    }

    static Add(...args) {
        return (
            Vector4.Add = Overload.Create().
                Add([Vector4, Vector4], function (value1, value2) {
                    return new Vector4(value1.X + value2.X, value1.Y + value2.Y, value1.Z + value2.Z, value1.W + value2.W);
                })
        ).call(this, ...args);
    }

    static Barycentric(...args) {
        return (
            Vector4.Barycentric = Overload.Create().
                Add([Vector4, Vector4, Vector4, Number, Number], function (value1, value2, value3, amount1, amount2) {
                    return new Vector4(MathHelper.Barycentric(value1.X, value2.X, value3.X, amount1, amount2),
                        MathHelper.Barycentric(value1.Y, value2.Y, value3.Y, amount1, amount2),
                        MathHelper.Barycentric(value1.Z, value2.Z, value3.Z, amount1, amount2),
                        MathHelper.Barycentric(value1.W, value2.W, value3.W, amount1, amount2));
                })
        ).call(this, ...args);
    }

    static CatmullRom(...args) {
        return (
            Vector4.CatmullRom = Overload.Create().
                Add([Vector4, Vector4, Vector4, Vector4, Number], function (value1, value2, value3, value4, amount) {
                    return new Vector4(MathHelper.CatmullRom(value1.X, value2.X, value3.X, value4.X, amount),
                        MathHelper.CatmullRom(value1.Y, value2.Y, value3.Y, value4.Y, amount),
                        MathHelper.CatmullRom(value1.Z, value2.Z, value3.Z, value4.Z, amount),
                        MathHelper.CatmullRom(value1.W, value2.W, value3.W, amount1, amount2));
                })
        ).call(this, ...args);
    }

    static Clamp(...args) {
        return (
            Vector4.Clamp = Overload.Create().
                Add([Vector4, Vector4, Vector4], function (value1, min, max) {
                    return new Vector4(MathHelper.Clamp(value1.X, min.X, max.X),
                        MathHelper.Clamp(value1.Y, min.Y, max.Y),
                        MathHelper.Clamp(value1.Z, min.Z, max.Z),
                        MathHelper.Clamp(value1.W, min.W, max.W));
                })
        ).call(this, ...args);
    }

    static Distance(...args) {
        return (
            Vector4.Distance = Overload.Create().
                Add([Vector4, Vector4], function (value1, value2) {
                    let result = Vector4.DistanceSquared(value1, value2);
                    return Math.sqrt(result);
                })
        ).call(this, ...args);
    }

    static DistanceSquared(...args) {
        return (
            Vector4.DistanceSquared = Overload.Create().
                Add([Vector4, Vector4], function (value1, value2) {
                    let v1 = value1.X - value2.X;
                    let v2 = value1.Y - value2.Y;
                    let v3 = value1.Z - value2.Z;
                    let v4 = value1.W - value2.W;
                    return (v1 * v1) + (v2 * v2) + (v3 * v3) + (v4 * v4);
                })
        ).call(this, ...args);
    }

    static Divide(...args) {
        return (
            Vector4.Divide = Overload.Create().
                Add([Vector4, Number], function (value1, value2) {
                    let factor = 1 / value2;
                    return new Vector4(value1.X * factor, value1.Y * factor, value1.Z * factor, value1.W * factor);
                }).
                Add([Vector4, Vector4], function (value1, value2) {
                    return new Vector4(value1.X / value2.X, value1.Y / value2.Y, value1.Z / value2.Z, value1.W / value2.W);
                })
        ).call(this, ...args);
    }

    static Dot(...args) {
        return (
            Vector4.Dot = Overload.Create().
                Add([Vector4, Vector4], function (vector1, vector2) {
                    return (vector1.X * vector2.X) + (vector1.Y * vector2.Y) + (vector1.Z * vector2.Z) + (vector1.W * Vector2.W);
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            Vector4.prototype.Equals = Overload.Create().
                Add([Vector4], function (obj) {
                    return (Math.abs(this.X - obj.X) < 1e-6 && Math.abs(this.Y - obj.Y) < 1e-6 && Math.abs(this.Z - obj.Z) < 1e-6 && Math.abs(this.W - obj.W) < 1e-6);
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Vector4.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    let hashCode = this.W;
                    hashCode = (hashCode * 397) ^ this.X;
                    hashCode = (hashCode * 397) ^ this.Y;
                    hashCode = (hashCode * 397) ^ this.Z;
                    return hashCode;
                })
        ).call(this, ...args);
    }

    static Hermite(...args) {
        return (
            Vector4.Hermite = Overload.Create().
                Add([Vector4, Vector4, Vector4, Vector4, Number], function (value1, tangent1, value2, tangent2, amount) {
                    return new Vector4(MathHelper.Hermite(value1.X, tangent1.X, value2.X, tangent2.X, amount),
                        MathHelper.Hermite(value1.Y, tangent1.Y, value2.Y, tangent2.Y, amount),
                        MathHelper.Hermite(value1.Z, tangent1.Z, value2.Z, tangent2.Z, amount),
                        MathHelper.Hermite(value1.W, tangent1.W, value2.W, tangent2.W, amount));
                })
        ).call(this, ...args);
    }

    Length(...args) {
        return (
            Vector4.prototype.Length = Overload.Create().
                Add([], function () {
                    let result = Vector4.DistanceSquared(this, Vector4.Zero);
                    return Math.sqrt(result);
                })
        ).call(this, ...args);
    }

    LengthSquared(...args) {
        return (
            Vector4.prototype.LengthSquared = Overload.Create().
                Add([], function () {
                    return Vector4.DistanceSquared(this, Vector4.Zero);
                })
        ).call(this, ...args);
    }

    static Lerp(...args) {
        return (
            Vector4.Lerp = Overload.Create().
                Add([Vector4, Vector4, Number], function (value1, value2, amount) {
                    return new Vector4(MathHelper.Lerp(value1.X, value2.X, amount),
                        MathHelper.Lerp(value1.Y, value2.Y, amount),
                        MathHelper.Lerp(value1.Z, value2.Z, amount),
                        MathHelper.Lerp(value1.W, value2.W, amount));
                })
        ).call(this, ...args);
    }

    static Max(...args) {
        return (
            Vector4.Max = Overload.Create().
                Add([Vector4, Vector4], function (value1, value2) {
                    return new Vector4(value1.X > value2.X ? value1.X : value2.X,
                        value1.Y > value2.Y ? value1.Y : value2.Y,
                        value1.Z > value2.Z ? value1.Z : value2.Z,
                        value1.W > value2.W ? value1.W : value2.W);
                })
        ).call(this, ...args);
    }

    static Min(...args) {
        return (
            Vector4.Min = Overload.Create().
                Add([Vector4, Vector4], function (value1, value2) {
                    return new Vector4(value1.X < value2.X ? value1.X : value2.X,
                        value1.Y < value2.Y ? value1.Y : value2.Y,
                        value1.Z < value2.Z ? value1.Z : value2.Z,
                        value1.W < value2.W ? value1.W : value2.W);
                })
        ).call(this, ...args);
    }

    static Multiply(...args) {
        return (
            Vector4.Multiply = Overload.Create().
                Add([Vector4, Number], function (value1, scaleFactor) {
                    return new Vector4(value1.X * scaleFactor,
                        value1.Y * scaleFactor,
                        value1.Z * scaleFactor,
                        value1.W * scaleFactor);
                }).
                Add([Vector4, Vector4], function (value1, value2) {
                    return new Vector4(value1.X * value2.X,
                        value1.Y * value2.Y,
                        value1.Z * value2.Z,
                        value1.W * value2.W);
                })
        ).call(this, ...args);
    }

    static Negate(...args) {
        return (
            Vector4.Negate = Overload.Create().
                Add([Vector4], function (value) {
                    return new Vector4(-value.X, -value.Y, -value.Z, -value.W);
                })
        ).call(this, ...args);
    }

    static Normalize(...args) {
        return (
            Vector4.Normalize = Overload.Create().
                Add([Vector4], function (value) {
                    let factor = Vector4.Distance(value, Vector4.Zero);
                    factor = 1 / factor;
                    return new Vector4(value.X * factor, value.Y * factor, value.Z * factor, value.W * factor);
                })
        ).call(this, ...args);
    }

    Normalize(...args) {
        return (
            Vector4.prototype.Normalize = Overload.Create().
                Add([], function () {
                    let factor = Vector4.Distance(this, Vector4.Zero);
                    factor = 1 / factor;
                    this.X *= factor;
                    this.Y *= factor;
                    this.Z *= factor;
                    this.W *= factor;
                })
        ).call(this, ...args);
    }

    static SmoothStep(...args) {
        return (
            Vector4.SmoothStep = Overload.Create().
                Add([Vector4, Vector4, Number], function (value1, value2, amount) {
                    return new Vector4(MathHelper.SmoothStep(value1.X, value2.X, amount),
                        MathHelper.SmoothStep(value1.Y, value2.Y, amount),
                        MathHelper.SmoothStep(value1.Z, value2.Z, amount),
                        MathHelper.SmoothStep(value1.W, value2.W, amount));
                })
        ).call(this, ...args);
    }

    static Subtract(...args) {
        return (
            Vector4.Subtract = Overload.Create().
                Add([Vector4, Vector4], function (value1, value2) {
                    return new Vector4(value1.X - value2.X, value1.Y - value2.Y, value1.Z - value2.Z, value1.W - value2.W);
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Vector4.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{X:${this.X} Y:${this.Y} Z:${this.Z} W:${this.W}}`;
                })
        ).call(this, ...args);
    }

    static Transform(...args) {
        return (
            Vector4.Transform = Overload.Create().
                Add([Vector2, Matrix], function (position, matrix) {
                    let x = (position.X * matrix.M11) + (position.Y * matrix.M21) + matrix.M41;
                    let y = (position.X * matrix.M12) + (position.Y * matrix.M22) + matrix.M42;
                    let z = (position.X * matrix.M13) + (position.Y * matrix.M23) + matrix.M43;
                    let w = (position.X * matrix.M14) + (position.Y * matrix.M24) + matrix.M44;
                    return new Vector4(x, y, z, w);
                }).
                Add([Vector2, Quaternion], function (value, rotation) {
                    let x2 = rotation.X + rotation.X;
                    let y2 = rotation.Y + rotation.Y;
                    let z2 = rotation.Z + rotation.Z;

                    let wx2 = rotation.W * x2;
                    let wy2 = rotation.W * y2;
                    let wz2 = rotation.W * z2;
                    let xx2 = rotation.X * x2;
                    let xy2 = rotation.X * y2;
                    let xz2 = rotation.X * z2;
                    let yy2 = rotation.Y * y2;
                    let yz2 = rotation.Y * z2;
                    let zz2 = rotation.Z * z2;

                    return new Vector4(value.X * (1.0 - yy2 - zz2) + value.Y * (xy2 - wz2),
                        value.X * (xy2 + wz2) + value.Y * (1.0 - xx2 - zz2),
                        value.X * (xz2 - wy2) + value.Y * (yz2 + wx2),
                        1.0);
                }).
                Add([Vector3, Matrix], function (position, matrix) {
                    var x = (position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + matrix.M41;
                    var y = (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + matrix.M42;
                    var z = (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + matrix.M43;
                    var w = (position.X * matrix.M14) + (position.Y * matrix.M24) + (position.Z * matrix.M34) + matrix.M44;
                    return new Vector4(x, y, z, w);
                }).
                Add([Vector3, Quaternion], function (value, rotation) {
                    var x2 = rotation.X + rotation.X;
                    var y2 = rotation.Y + rotation.Y;
                    var z2 = rotation.Z + rotation.Z;

                    var wx2 = rotation.W * x2;
                    var wy2 = rotation.W * y2;
                    var wz2 = rotation.W * z2;
                    var xx2 = rotation.X * x2;
                    var xy2 = rotation.X * y2;
                    var xz2 = rotation.X * z2;
                    var yy2 = rotation.Y * y2;
                    var yz2 = rotation.Y * z2;
                    var zz2 = rotation.Z * z2;

                    return new Vector4(value.X * (1.0 - yy2 - zz2) + value.Y * (xy2 - wz2) + value.Z * (xz2 + wy2),
                        value.X * (xy2 + wz2) + value.Y * (1.0 - xx2 - zz2) + value.Z * (yz2 - wx2),
                        value.X * (xz2 - wy2) + value.Y * (yz2 + wx2) + value.Z * (1.0 - xx2 - yy2),
                        1.0);
                }).
                Add([Vector4, Matrix], function (position, matrix) {
                    var x = (position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + (position.W * matrix.M41);
                    var y = (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + (position.W * matrix.M42);
                    var z = (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + (position.W * matrix.M43);
                    var w = (position.X * matrix.M14) + (position.Y * matrix.M24) + (position.Z * matrix.M34) + (position.W * matrix.M44);
                    return new Vector4(x, y, z, w);
                }).
                Add([Vector4, Quaternion], function (value, rotation) {
                    var x2 = rotation.X + rotation.X;
                    var y2 = rotation.Y + rotation.Y;
                    var z2 = rotation.Z + rotation.Z;

                    var wx2 = rotation.W * x2;
                    var wy2 = rotation.W * y2;
                    var wz2 = rotation.W * z2;
                    var xx2 = rotation.X * x2;
                    var xy2 = rotation.X * y2;
                    var xz2 = rotation.X * z2;
                    var yy2 = rotation.Y * y2;
                    var yz2 = rotation.Y * z2;
                    var zz2 = rotation.Z * z2;

                    return new Vector4(value.X * (1.0 - yy2 - zz2) + value.Y * (xy2 - wz2) + value.Z * (xz2 + wy2),
                        value.X * (xy2 + wz2) + value.Y * (1.0 - xx2 - zz2) + value.Z * (yz2 - wx2),
                        value.X * (xz2 - wy2) + value.Y * (yz2 + wx2) + value.Z * (1.0 - xx2 - yy2),
                        value.w);
                }).
                Add([TypeList.T(Vector4), Number, Matrix, TypeList.T(Vector4), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
                    if (sourceArray == null) {
                        throw new TypeError(new Error("sourceArray"));
                    }

                    if (destinationArray == null) {
                        throw new TypeError(new Error("destinationArray"));
                    }

                    if (sourceArray.Length < sourceIndex + length) {
                        throw new TypeError(new Error("Source array length is lesser than sourceIndex + length"));
                    }

                    if (destinationArray.Length < destinationIndex + length) {
                        throw new TypeError(new Error("Destination array length is lesser than destinationIndex + length"));
                    }

                    for (let i = 0; i < destinationArray.Length; i++) {
                        destinationArray[i] = destinationArray[i] || Vector4.Zero;
                    }

                    for (let i = 0; i < length; i++) {
                        let value = sourceArray[sourceIndex + i];
                        destinationArray[destinationIndex + i] = Vector4.Transform(value, matrix);
                    }
                }).
                Add([TypeList.T(Vector4), Number, Quaternion, TypeList.T(Vector4), Number, Number], function () {
                    if (sourceArray == null) {
                        throw new TypeError(new Error("sourceArray"));
                    }

                    if (destinationArray == null) {
                        throw new TypeError(new Error("destinationArray"));
                    }

                    if (sourceArray.Length < sourceIndex + length) {
                        throw new TypeError(new Error("Source array length is lesser than sourceIndex + length"));
                    }

                    if (destinationArray.Length < destinationIndex + length) {
                        throw new TypeError(new Error("Destination array length is lesser than destinationIndex + length"));
                    }

                    for (let i = 0; i < destinationArray.Length; i++) {
                        destinationArray[i] = destinationArray[i] || Vector4.Zero;
                    }

                    for (let i = 0; i < length; i++) {
                        let value = sourceArray[sourceIndex + i];
                        destinationArray[destinationIndex + i] = Vector4.Transform(value, rotation);
                    }
                }).
                Add([TypeList.T(Vector4), Matrix, TypeList.T(Vector4)], function () {
                    Vector4.Transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.Length);
                }).
                Add([TypeList.T(Vector4), Quaternion, TypeList.T(Vector4)], function () {
                    Vector4.Transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.Length);
                })
        ).call(this, ...args);
    }
    
    Serialize(...args) {
        const superSerialize = super.Serialize;
        return (
            Vector4.prototype.Serialize = Overload.Create().
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
            Vector4.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== Vector4.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    return new Vector4(obj.X, obj.Y, obj.Z, obj.W);
                })
        ).call(this, ...args);
    }
}

export default Vector4;