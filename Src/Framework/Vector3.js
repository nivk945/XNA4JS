import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector2 from './Vector2.js';
import Quaternion from './Quaternion.js';
import Matrix from './Matrix.js';
import TypeList from '../Core/TypeList.js';

class Vector3 extends Object {
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
            }
        });

        (Vector3.prototype.constructor._init || (Vector3.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.X = 0;
                this.Y = 0;
                this.Z = 0;
            }).
            Add([Number], function (value) {
                this.X = value;
                this.Y = value;
                this.Z = value;
            }).
            Add([Number, Number, Number], function (x, y, z) {
                this.X = x;
                this.Y = y;
                this.Z = z;
            }).
            Add([Vector2, Number], function (value, z) {
                this.X = value.X;
                this.Y = value.Y;
                this.Z = z;
            })
        )).call(this, ...args);
    }
    
    static get One() {
        return new Vector3(1, 1, 1);
    }

    static get UnitX() {
        return new Vector3(1, 0, 0);
    }

    static get UnitY() {
        return new Vector3(0, 1, 0);
    }

    static get UnitZ() {
        return new Vector3(0, 0, 1);
    }

    static get Zero() {
        return new Vector3(0, 0, 0);
    }

    static get Up() {
        return new Vector3(0, 1, 0);
    }

    static get Right() {
        return new Vector3(1, 0, 0);
    }

    static get Left() {
        return new Vector3(-1, 0, 0);
    }

    static get Forward() {
        return new Vector3(0, 0, -1);
    }

    static get Down() {
        return new Vector3(0, -1, 0);
    }

    static get Backward() {
        return new Vector3(0, 0, 1);
    }

    static Add(...args) {
        return (
            Vector3.Add = Overload.Create().
                Add([Vector3, Vector3], function (value1, value2) {
                    return new Vector3(value1.X + value2.X, value1.Y + value2.Y, value1.Z + value2.Z);
                })
        ).call(this, ...args);
    }

    static Barycentric(...args) {
        return (
            Vector3.Barycentric = Overload.Create().
                Add([Vector3, Vector3, Vector3, Number, Number], function (value1, value2, value3, amount1, amount2) {
                    return new Vector3(MathHelper.Barycentric(value1.X, value2.X, value3.X, amount1, amount2),
                        MathHelper.Barycentric(value1.Y, value2.Y, value3.Y, amount1, amount2),
                        MathHelper.Barycentric(value1.Z, value2.Z, value3.Z, amount1, amount2));
                })
        ).call(this, ...args);
    }

    static CatmullRom(...args) {
        return (
            Vector3.CatmullRom = Overload.Create().
                Add([Vector3, Vector3, Vector3, Vector3, Number], function (value1, value2, value3, value4, amount) {
                    return new Vector3(MathHelper.CatmullRom(value1.X, value2.X, value3.X, value4.X, amount),
                        MathHelper.CatmullRom(value1.Y, value2.Y, value3.Y, value4.Y, amount),
                        MathHelper.CatmullRom(value1.Z, value2.Z, value3.Z, value4.Z, amount));
                })
        ).call(this, ...args);
    }

    static Clamp(...args) {
        return (
            Vector3.Clamp = Overload.Create().
                Add([Vector3, Vector3, Vector3], function (value1, min, max) {
                    return new Vector3(MathHelper.Clamp(value1.X, min.X, max.X),
                        MathHelper.Clamp(value1.Y, min.Y, max.Y),
                        MathHelper.Clamp(value1.Z, min.Z, max.Z));
                })
        ).call(this, ...args);
    }

    static Cross(...args) {
        return (
            Vector3.Cross = Overload.Create().
                Add([Vector3, Vector3], function (vector1, vector2) {
                    let x = vector1.Y * vector2.Z - vector2.Y * vector1.Z;
                    let y = -(vector1.X * vector2.Z - vector2.X * vector1.Z);
                    let z = vector1.X * vector2.Y - vector2.X * vector1.Y;
                    return new Vector3(x, y, z);
                })
        ).call(this, ...args);
    }

    static Distance(...args) {
        return (
            Vector3.Distance = Overload.Create().
                Add([Vector3, Vector3], function (value1, value2) {
                    let result = Vector3.DistanceSquared(value1, value2);
                    return Math.sqrt(result);
                })
        ).call(this, ...args);
    }

    static DistanceSquared(...args) {
        return (
            Vector3.DistanceSquared = Overload.Create().
                Add([Vector3, Vector3], function (value1, value2) {
                    let v1 = value1.X - value2.X;
                    let v2 = value1.Y - value2.Y;
                    let v3 = value1.Z - value2.Z;
                    return (v1 * v1) + (v2 * v2) + (v3 * v3);
                })
        ).call(this, ...args);
    }

    static Divide(...args) {
        return (
            Vector3.Divide = Overload.Create().
                Add([Vector3, Number], function (value1, value2) {
                    let factor = 1 / value2;
                    return new Vector3(value1.X * factor, value1.Y * factor, value1.Z * factor);
                }).
                Add([Vector3, Vector3], function (value1, value2) {
                    return new Vector3(value1.X / value2.X, value1.Y / value2.Y, value1.Z / value2.Z);
                })
        ).call(this, ...args);
    }

    static Dot(...args) {
        return (
            Vector3.Dot = Overload.Create().
                Add([Vector3, Vector3], function (vector1, vector2) {
                    return (vector1.X * vector2.X) + (vector1.Y * vector2.Y) + (vector1.Z * vector2.Z);
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            Vector3.prototype.Equals = Overload.Create().
                Add([Vector3], function (obj) {
                    return (Math.abs(this.X - obj.X) < 1e-6 && Math.abs(this.Y - obj.Y) < 1e-6 && Math.abs(this.Z - obj.Z) < 1e-6);
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Vector3.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    let hashCode = this.X;
                    hashCode = (hashCode * 397) ^ this.Y;
                    hashCode = (hashCode * 397) ^ this.Z;
                    return hashCode | 0;
                })
        ).call(this, ...args);
    }

    static Hermite(...args) {
        return (
            Vector3.Hermite = Overload.Create().
                Add([Vector3, Vector3, Vector3, Vector3, Number], function (value1, tangent1, value2, tangent2, amount) {
                    return new Vector3(MathHelper.Hermite(value1.X, tangent1.X, value2.X, tangent2.X, amount),
                        MathHelper.Hermite(value1.Y, tangent1.Y, value2.Y, tangent2.Y, amount),
                        MathHelper.Hermite(value1.Z, tangent1.Z, value2.Z, tangent2.Z, amount));
                })
        ).call(this, ...args);
    }

    Length(...args) {
        return (
            Vector3.prototype.Length = Overload.Create().
                Add([], function () {
                    let result = Vector3.DistanceSquared(this, Vector3.Zero);
                    return Math.sqrt(result);
                })
        ).call(this, ...args);
    }

    LengthSquared(...args) {
        return (
            Vector3.prototype.LengthSquared = Overload.Create().
                Add([], function () {
                    return Vector3.DistanceSquared(this, Vector3.Zero);
                })
        ).call(this, ...args);
    }

    static Lerp(...args) {
        return (
            Vector3.Lerp = Overload.Create().
                Add([Vector3, Vector3, Number], function (value1, value2, amount) {
                    return new Vector3(MathHelper.Lerp(value1.X, value2.X, amount),
                        MathHelper.Lerp(value1.Y, value2.Y, amount),
                        MathHelper.Lerp(value1.Z, value2.Z, amount));
                })
        ).call(this, ...args);
    }

    static Max(...args) {
        return (
            Vector3.Max = Overload.Create().
                Add([Vector3, Vector3], function (value1, value2) {
                    return new Vector3(value1.X > value2.X ? value1.X : value2.X,
                        value1.Y > value2.Y ? value1.Y : value2.Y,
                        value1.Z > value2.Z ? value1.Z : value2.Z);
                })
        ).call(this, ...args);
    }

    static Min(...args) {
        return (
            Vector3.Min = Overload.Create().
                Add([Vector3, Vector3], function (value1, value2) {
                    return new Vector3(value1.X < value2.X ? value1.X : value2.X,
                        value1.Y < value2.Y ? value1.Y : value2.Y,
                        value1.Z < value2.Z ? value1.Z : value2.Z);
                })
        ).call(this, ...args);
    }

    static Multiply(...args) {
        return (
            Vector3.Multiply = Overload.Create().
                Add([Vector3, Number], function (value1, scaleFactor) {
                    return new Vector3(value1.X * scaleFactor,
                        value1.Y * scaleFactor,
                        value1.Z * scaleFactor);
                }).
                Add([Vector3, Vector3], function (value1, value2) {
                    return new Vector3(value1.X * value2.X,
                        value1.Y * value2.Y,
                        value1.Z * value2.Z);
                })
        ).call(this, ...args);
    }

    static Negate(...args) {
        return (
            Vector3.Negate = Overload.Create().
                Add([Vector3], function (value) {
                    return new Vector3(-value.X, -value.Y, -value.Z);
                })
        ).call(this, ...args);
    }

    static Normalize(...args) {
        return (
            Vector3.Normalize = Overload.Create().
                Add([Vector3], function (value) {
                    let factor = Vector3.Distance(value, Vector3.Zero);
                    factor = 1 / factor;
                    return new Vector3(value.X * factor, value.Y * factor, value.Z * factor);
                })
        ).call(this, ...args);
    }

    Normalize(...args) {
        return (
            Vector3.prototype.Normalize = Overload.Create().
                Add([], function () {
                    let factor = Vector3.Distance(this, Vector3.Zero);
                    factor = 1 / factor;
                    this.X *= factor;
                    this.Y *= factor;
                    this.Z *= factor;
                })
        ).call(this, ...args);
    }

    static Reflect(...args) {
        return (
            Vector3.Reflect = Overload.Create().
                Add([Vector3, Vector3], function (vector, normal) {
                    let dotProduct = ((vector.X * normal.X) + (vector.Y * normal.Y)) + (vector.Z * normal.Z);
                    return new Vector3(vector.X - (2.0 * normal.X) * dotProduct,
                        vector.Y - (2.0 * normal.Y) * dotProduct,
                        vector.Z - (2.0 * normal.Z) * dotProduct);
                })
        ).call(this, ...args);
    }

    static SmoothStep(...args) {
        return (
            Vector3.SmoothStep = Overload.Create().
                Add([Vector3, Vector3, Number], function (value1, value2, amount) {
                    return new Vector3(MathHelper.SmoothStep(value1.X, value2.X, amount),
                        MathHelper.SmoothStep(value1.Y, value2.Y, amount),
                        MathHelper.SmoothStep(value1.Z, value2.Z, amount));
                })
        ).call(this, ...args);
    }

    static Subtract(...args) {
        return (
            Vector3.Subtract = Overload.Create().
                Add([Vector3, Vector3], function (value1, value2) {
                    return new Vector3(value1.X - value2.X, value1.Y - value2.Y, value1.Z - value2.Z);
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Vector3.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{X:${this.X} Y:${this.Y} Z:${this.Z}}`;
                })
        ).call(this, ...args);
    }

    static Transform(...args) {
        return (
            Vector3.Transform = Overload.Create().
                Add([Vector3, Matrix], function (position, matrix) {
                    var x = (position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + matrix.M41;
                    var y = (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + matrix.M42;
                    var z = (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + matrix.M43;
                    return new Vector3(x, y, z);
                }).
                Add([Vector3, Quaternion], function (value, rotation) {
                    let x = 2 * (rotation.Y * value.Z - rotation.Z * value.Y);
                    let y = 2 * (rotation.Z * value.X - rotation.X * value.Z);
                    let z = 2 * (rotation.X * value.Y - rotation.Y * value.X);

                    let result = new Vector3();
                    result.X = value.X + x * rotation.W + (rotation.Y * z - rotation.Z * y);
                    result.Y = value.Y + y * rotation.W + (rotation.Z * x - rotation.X * z);
                    result.Z = value.Z + z * rotation.W + (rotation.X * y - rotation.Y * x);
                    return result;
                }).
                Add([TypeList.T(Vector3), Number, Matrix, TypeList.T(Vector3), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
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
                        destinationArray[i] = destinationArray[i] || Vector3.Zero;
                    }

                    for (let x = 0; x < length; x++) {
                        let position = sourceArray[sourceIndex + i];
                        destinationArray[destinationIndex + i] =
                            new Vector3((position.X * matrix.M11) + (position.Y * matrix.M21) + (position.Z * matrix.M31) + matrix.M41,
                                (position.X * matrix.M12) + (position.Y * matrix.M22) + (position.Z * matrix.M32) + matrix.M42,
                                (position.X * matrix.M13) + (position.Y * matrix.M23) + (position.Z * matrix.M33) + matrix.M43);
                    }
                }).
                Add([TypeList.T(Vector3), Number, Quaternion, TypeList.T(Vector3), Number, Number], function (sourceArray, sourceIndex, rotation, destinationArray, destinationIndex, length) {
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
                        destinationArray[i] = destinationArray[i] || Vector3.Zero;
                    }

                    for (let x = 0; x < length; x++) {
                        let position = sourceArray[sourceIndex + i];

                        let x = 2 * (rotation.Y * position.Z - rotation.Z * position.Y);
                        let y = 2 * (rotation.Z * position.X - rotation.X * position.Z);
                        let z = 2 * (rotation.X * position.Y - rotation.Y * position.X);

                        destinationArray[destinationIndex + i] =
                            new Vector3(position.X + x * rotation.W + (rotation.Y * z - rotation.Z * y),
                                position.Y + y * rotation.W + (rotation.Z * x - rotation.X * z),
                                position.Z + z * rotation.W + (rotation.X * y - rotation.Y * x));
                    }
                }).
                Add([TypeList.T(Vector3), Matrix, TypeList.T(Vector3)], function (sourceArray, matrix, destinationArray) {
                    Vector3.Transform(sourceArray, 0, matrix, destinationArray, 0, sourceArray.Length);
                }).
                Add([TypeList.T(Vector3), Quaternion, TypeList.T(Vector3)], function (sourceArray, rotation, destinationArray) {
                    Vector3.Transform(sourceArray, 0, rotation, destinationArray, 0, sourceArray.Length);
                })
        ).call(this, ...args);
    }

    static TransformNormal(...args) {
        return (
            Vector3.TransformNormal = Overload.Create().
                Add([Vector3, Matrix], function (normal, matrix) {
                    var x = (normal.X * matrix.M11) + (normal.Y * matrix.M21) + (normal.Z * matrix.M31);
                    var y = (normal.X * matrix.M12) + (normal.Y * matrix.M22) + (normal.Z * matrix.M32);
                    var z = (normal.X * matrix.M13) + (normal.Y * matrix.M23) + (normal.Z * matrix.M33);
                    return new Vector3(x, y, z);
                }).
                Add([TypeList.T(Vector3), Number, Matrix, TypeList.T(Vector3), Number, Number], function (sourceArray, sourceIndex, matrix, destinationArray, destinationIndex, length) {
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
                        destinationArray[i] = destinationArray[i] || Vector3.Zero;
                    }

                    for (let i = 0; i < length; i++) {
                        let normal = sourceArray[sourceIndex + x];

                        destinationArray[destinationIndex + x] =
                            new Vector3(
                                (normal.X * matrix.M11) + (normal.Y * matrix.M21) + (normal.Z * matrix.M31),
                                (normal.X * matrix.M12) + (normal.Y * matrix.M22) + (normal.Z * matrix.M32),
                                (normal.X * matrix.M13) + (normal.Y * matrix.M23) + (normal.Z * matrix.M33));
                    }
                }).
                Add([TypeList.T(Vector3), Matrix, TypeList.T(Vector3)], function (sourceArray, matrix, destinationArray) {
                    Vector3.TransformNormal(sourceArray, 0, matrix, destinationArray, 0, sourceArray.Length);
                })
        ).call(this, ...args);
    }
    
    Serialize(...args) {
        const superSerialize = super.Serialize;
        return (
            Vector3.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        X: this.X,
                        Y: this.Y,
                        Z: this.Z
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            Vector3.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== Vector3.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    return new Vector3(obj.X, obj.Y, obj.Z);
                })
        ).call(this, ...args);
    }
}

export default Vector3;