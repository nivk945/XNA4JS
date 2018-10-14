import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector2 from './Vector2.js';
import Vector3 from './Vector3.js';
import Quaternion from './Quaternion.js';
import Plane from './Plane.js';

class Matrix extends Object {
    constructor(...args) {
        super();

        for (let x = 1; x <= 4; x++) {
            for (let y = 1; y <= 4; y++) {
                ((x, y) => {
                    window.Object.defineProperty(this, `M${y}${x}`, {
                        get: () => {
                            return this._getPrivateVar(`_m${y}${x}`)
                        },
                        set: Overload.Create().
                            Add([Number], (value) => {
                                this._setPrivateVar(`_m${y}${x}`, value);
                            })
                    });
                })(x, y);
            }
        }

        window.Object.defineProperties(this, {
            Backward: {
                get: () => {
                    return new Vector3(this.M31, this.M32, this.M33);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M31 = value.X;
                        this.M32 = value.Y;
                        this.M33 = value.Z;
                    })
            },
            Down: {
                get: () => {
                    return new Vector3(-this.M21, -this.M22, -this.M23);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M21 = -value.X;
                        this.M22 = -value.Y;
                        this.M23 = -value.Z;
                    })
            },
            Forward: {
                get: () => {
                    return new Vector3(-this.M31, -this.M32, -this.M33);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M31 = -value.X;
                        this.M32 = -value.Y;
                        this.M33 = -value.Z;
                    })
            },
            Left: {
                get: () => {
                    return new Vector3(-this.M11, -this.M12, -this.M13);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M11 = -value.X;
                        this.M12 = -value.Y;
                        this.M13 = -value.Z;
                    })
            },
            Right: {
                get: () => {
                    return new Vector3(this.M11, this.M12, this.M13);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M11 = value.X;
                        this.M12 = value.Y;
                        this.M13 = value.Z;
                    })
            },
            Up: {
                get: () => {
                    return new Vector3(this.M21, this.M22, this.M23);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M21 = value.X;
                        this.M22 = value.Y;
                        this.M23 = value.Z;
                    })
            },
            Scale: {
                get: () => {
                    return new Vector3(this.M11, this.M22, this.M33);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M11 = value.X;
                        this.M22 = value.Y;
                        this.M33 = value.Z;
                    })
            },
            Translation: {
                get: () => {
                    return new Vector3(this.M41, this.M42, this.M43);
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this.M41 = value.X;
                        this.M42 = value.Y;
                        this.M43 = value.Z;
                    })
            }
        });

        (Matrix.prototype.constructor._init || (Matrix.prototype.constructor._init = Overload.Create().
            Add([], function () {
                for (let x = 1; x <= 4; x++) {
                    for (let y = 1; y <= 4; y++) {
                        this[`M${y}${x}`] = 0;
                    }
                }
            }).
            Add([Number, Number, Number, Number,
                Number, Number, Number, Number,
                Number, Number, Number, Number,
                Number, Number, Number, Number], function (...args) {
                    for (let i = 0; i < 16; i++) {
                        this[`M${((i / 4) | 0) + 1}${(i % 4) + 1}`] = args[i];
                    }
                })
        )).call(this, ...args);
    }

    static get [Symbol.name]() {
        return 'Matrix';
    }

    static get Identity() {
        return new Matrix(1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1);
    }

    static Add(...args) {
        return (
            Matrix.Add = Overload.Create().
                Add([Matrix, Matrix], function (matrix1, matrix2) {
                    let matrix = new Matrix();
                    for (let x = 1; x <= 4; x++) {
                        for (let y = 1; y <= 4; y++) {
                            matrix[`M${y}${x}`] = matrix1[`M${y}${x}`] + matrix2[`M${y}${x}`];
                        }
                    }
                    return matrix;
                })
        ).call(this, ...args);
    }

    static CreateBillboard(...args) {
        return (
            Matrix.CreateBillboard = Overload.Create().
                Add([Vector3, Vector3, Vector3, '*'], function (objectPosition, cameraPosition, cameraUpVector, cameraForwardVector) {
                    let result = new Matrix();
                    let vector = new Vector3();
                    let vector2 = new Vector3();
                    let vector3 = new Vector3();
                    vector.X = objectPosition.X - cameraPosition.X;
                    vector.Y = objectPosition.Y - cameraPosition.Y;
                    vector.Z = objectPosition.Z - cameraPosition.Z;
                    var num = vector.LengthSquared();
                    if (num < 0.0001) {
                        if (!(cameraForwardVector instanceof Vector3)) {
                            vector = Vector3.Forward
                        } else {
                            vector.X = -cameraForwardVector.X;
                            vector.Y = -cameraForwardVector.Y;
                            vector.Z = -cameraForwardVector.Z;
                        }
                    }
                    else {
                        vector = Vector3.Multiply(vector, (1 / (Math.sqrt(num))));
                    }
                    vector3 = Vector3.Cross(cameraUpVector, vector);
                    vector3.Normalize();
                    vector2 = Vector3.Cross(vector, vector3);
                    result.M11 = vector3.X;
                    result.M12 = vector3.Y;
                    result.M13 = vector3.Z;
                    result.M14 = 0;
                    result.M21 = vector2.X;
                    result.M22 = vector2.Y;
                    result.M23 = vector2.Z;
                    result.M24 = 0;
                    result.M31 = vector.X;
                    result.M32 = vector.Y;
                    result.M33 = vector.Z;
                    result.M34 = 0;
                    result.M41 = objectPosition.X;
                    result.M42 = objectPosition.Y;
                    result.M43 = objectPosition.Z;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateConstrainedBillboard(...args) {
        return (
            Matrix.CreateConstrainedBillboard = Overload.Create().
                Add([Vector3, Vector3, Vector3, '*', '*'], function (objectPosition, cameraPosition, rotateAxis, cameraForwardVector, objectForwardVector) {
                    let result = new Matrix();
                    let num;
                    let vector = new Vector3();
                    let vector2 = new Vector3();
                    let vector3 = new Vector3();
                    vector2.X = objectPosition.X - cameraPosition.X;
                    vector2.Y = objectPosition.Y - cameraPosition.Y;
                    vector2.Z = objectPosition.Z - cameraPosition.Z;
                    var num2 = vector2.LengthSquared();
                    if (num2 < 0.0001) {
                        if (!(cameraForwardVector instanceof Vector3)) {
                            vector2 = Vector3.Forward
                        } else {
                            vector2.X = -cameraForwardVector.X;
                            vector2.Y = -cameraForwardVector.Y;
                            vector2.Z = -cameraForwardVector.Z;
                        }
                    }
                    else {
                        vector2 = Vector3.Multiply(vector2, (1 / (Math.sqrt(num2))));
                    }
                    var vector4 = rotateAxis;
                    num = Vector3.Dot(rotateAxis, vector2);
                    if (Math.abs(num) > 0.9982547) {
                        if (objectForwardVector instanceof Vector3) {
                            vector = objectForwardVector;
                            num = Vector3.Dot(rotateAxis, vector);
                            if (Math.abs(num) > 0.9982547) {
                                num = ((rotateAxis.X * Vector3.Forward.X) + (rotateAxis.Y * Vector3.Forward.Y)) + (rotateAxis.Z * Vector3.Forward.Z);
                                vector = (Math.abs(num) > 0.9982547) ? Vector3.Right : Vector3.Forward;
                            }
                        }
                        else {
                            num = ((rotateAxis.X * Vector3.Forward.X) + (rotateAxis.Y * Vector3.Forward.Y)) + (rotateAxis.Z * Vector3.Forward.Z);
                            vector = (Math.abs(num) > 0.9982547) ? Vector3.Right : Vector3.Forward;
                        }
                        vector3 = Vector3.Cross(rotateAxis, vector);
                        vector3.Normalize();
                        vector = Vector3.Cross(vector3, rotateAxis);
                        vector.Normalize();
                    }
                    else {
                        vector3 = Vector3.Cross(rotateAxis, vector2);
                        vector3.Normalize();
                        vector = Vector3.Cross(vector3, vector4);
                        vector.Normalize();
                    }
                    result.M11 = vector3.X;
                    result.M12 = vector3.Y;
                    result.M13 = vector3.Z;
                    result.M14 = 0;
                    result.M21 = vector4.X;
                    result.M22 = vector4.Y;
                    result.M23 = vector4.Z;
                    result.M24 = 0;
                    result.M31 = vector.X;
                    result.M32 = vector.Y;
                    result.M33 = vector.Z;
                    result.M34 = 0;
                    result.M41 = objectPosition.X;
                    result.M42 = objectPosition.Y;
                    result.M43 = objectPosition.Z;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateFromAxisAngle(...args) {
        return (
            Matrix.CreateFromAxisAngle = Overload.Create().
                Add([Vector3, Number], function (axis, angle) {
                    let result = new Matrix();
                    let x = axis.X;
                    let y = axis.Y;
                    let z = axis.Z;
                    let num2 = Math.sin(angle);
                    let num = Math.cos(angle);
                    let num11 = x * x;
                    let num10 = y * y;
                    let num9 = z * z;
                    let num8 = x * y;
                    let num7 = x * z;
                    let num6 = y * z;
                    result.M11 = num11 + (num * (1 - num11));
                    result.M12 = (num8 - (num * num8)) + (num2 * z);
                    result.M13 = (num7 - (num * num7)) - (num2 * y);
                    result.M14 = 0;
                    result.M21 = (num8 - (num * num8)) - (num2 * z);
                    result.M22 = num10 + (num * (1 - num10));
                    result.M23 = (num6 - (num * num6)) + (num2 * x);
                    result.M24 = 0;
                    result.M31 = (num7 - (num * num7)) + (num2 * y);
                    result.M32 = (num6 - (num * num6)) - (num2 * x);
                    result.M33 = num9 + (num * (1 - num9));
                    result.M34 = 0;
                    result.M41 = 0;
                    result.M42 = 0;
                    result.M43 = 0;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateFromQuaternion(...args) {
        return (
            Matrix.CreateFromQuaternion = Overload.Create().
                Add([Quaternion], function (quaternion) {
                    let result = new Matrix();
                    let num9 = quaternion.X * quaternion.X;
                    let num8 = quaternion.Y * quaternion.Y;
                    let num7 = quaternion.Z * quaternion.Z;
                    let num6 = quaternion.X * quaternion.Y;
                    let num5 = quaternion.Z * quaternion.W;
                    let num4 = quaternion.Z * quaternion.X;
                    let num3 = quaternion.Y * quaternion.W;
                    let num2 = quaternion.Y * quaternion.Z;
                    let num = quaternion.X * quaternion.W;
                    result.M11 = 1 - (2 * (num8 + num7));
                    result.M12 = 2 * (num6 + num5);
                    result.M13 = 2 * (num4 - num3);
                    result.M14 = 0;
                    result.M21 = 2 * (num6 - num5);
                    result.M22 = 1 - (2 * (num7 + num9));
                    result.M23 = 2 * (num2 + num);
                    result.M24 = 0;
                    result.M31 = 2 * (num4 + num3);
                    result.M32 = 2 * (num2 - num);
                    result.M33 = 1 - (2 * (num8 + num9));
                    result.M34 = 0;
                    result.M41 = 0;
                    result.M42 = 0;
                    result.M43 = 0;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateFromYawPitchRoll(...args) {
        return (
            Matrix.CreateFromYawPitchRoll = Overload.Create().
                Add([Number, Number, Number], function (yaw, pitch, roll) {
                    let quaternion = Quaternion.CreateFromYawPitchRoll(yaw, pitch, roll);
                    return Matrix.CreateFromQuaternion(quaternion);
                })
        ).call(this, ...args);
    }

    static CreateLookAt(...args) {
        return (
            Matrix.CreateLookAt = Overload.Create().
                Add([Vector3, Vector3, Vector3], function (cameraPosition, cameraTarget, cameraUpVector) {
                    let result = new Matrix();
                    let vector = Vector3.Normalize(Vector3.Subtract(cameraPosition, cameraTarget));
                    let vector2 = Vector3.Normalize(Vector3.Cross(cameraUpVector, vector));
                    let vector3 = Vector3.Cross(vector, vector2);
                    result.M11 = vector2.X;
                    result.M12 = vector3.X;
                    result.M13 = vector.X;
                    result.M14 = 0;
                    result.M21 = vector2.Y;
                    result.M22 = vector3.Y;
                    result.M23 = vector.Y;
                    result.M24 = 0;
                    result.M31 = vector2.Z;
                    result.M32 = vector3.Z;
                    result.M33 = vector.Z;
                    result.M34 = 0;
                    result.M41 = -Vector3.Dot(vector2, cameraPosition);
                    result.M42 = -Vector3.Dot(vector3, cameraPosition);
                    result.M43 = -Vector3.Dot(vector, cameraPosition);
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateOrthographic(...args) {
        return (
            Matrix.CreateOrthographic = Overload.Create().
                Add([Number, Number, Number, Number], function (width, height, zNearPlane, zFarPlane) {
                    let result = new Matrix();
                    result.M11 = 2 / width;
                    result.M12 = result.M13 = result.M14 = 0;
                    result.M22 = 2 / height;
                    result.M21 = result.M23 = result.M24 = 0;
                    result.M33 = 1 / (zNearPlane - zFarPlane);
                    result.M31 = result.M32 = result.M34 = 0;
                    result.M41 = result.M42 = 0;
                    result.M43 = zNearPlane / (zNearPlane - zFarPlane);
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateOrthographicOffCenter(...args) {
        return (
            Matrix.CreateOrthographicOffCenter = Overload.Create().
                Add([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, zNearPlane, zFarPlane) {
                    let result = new Matrix();
                    result.M11 = (2.0 / (right - left));
                    result.M12 = 0.0;
                    result.M13 = 0.0;
                    result.M14 = 0.0;
                    result.M21 = 0.0;
                    result.M22 = (2.0 / (top - bottom));
                    result.M23 = 0.0;
                    result.M24 = 0.0;
                    result.M31 = 0.0;
                    result.M32 = 0.0;
                    result.M33 = (1.0 / (zNearPlane - zFarPlane));
                    result.M34 = 0.0;
                    result.M41 = ((left + right) / (left - right));
                    result.M42 = ((top + bottom) / (bottom - top));
                    result.M43 = (zNearPlane / (zNearPlane - zFarPlane));
                    result.M44 = 1.0;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreatePerspective(...args) {
        return (
            Matrix.CreatePerspective = Overload.Create().
                Add([Number, Number, Number, Number], function (width, height, nearPlaneDistance, farPlaneDistance) {
                    let result = new Matrix();

                    if (nearPlaneDistance <= 0) {
                        throw new TypeError(new Error("nearPlaneDistance <= 0"));
                    }

                    if (farPlaneDistance <= 0) {
                        throw new TypeError(new Error("farPlaneDistance <= 0"));
                    }

                    if (nearPlaneDistance >= farPlaneDistance) {
                        throw new TypeError(new Error("nearPlaneDistance >= farPlaneDistance"));
                    }

                    result.M11 = (2 * nearPlaneDistance) / width;
                    result.M12 = result.M13 = result.M14 = 0;
                    result.M22 = (2 * nearPlaneDistance) / height;
                    result.M21 = result.M23 = result.M24 = 0;
                    result.M33 = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                    result.M31 = result.M32 = 0;
                    result.M34 = -1;
                    result.M41 = result.M42 = result.M44 = 0;
                    result.M43 = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                    return result;
                })
        ).call(this, ...args);
    }

    static CreatePerspectiveFieldOfView(...args) {
        return (
            Matrix.CreatePerspectiveFieldOfView = Overload.Create().
                Add([Number, Number, Number, Number], function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
                    let result = new Matrix();

                    if ((fieldOfView <= 0) || (fieldOfView >= 3.141593)) {
                        throw new TypeError(new Error("fieldOfView <= 0 or >= PI"));
                    }

                    if (nearPlaneDistance <= 0) {
                        throw new TypeError(new Error("nearPlaneDistance <= 0"));
                    }

                    if (farPlaneDistance <= 0) {
                        throw new TypeError(new Error("farPlaneDistance <= 0"));
                    }

                    if (nearPlaneDistance >= farPlaneDistance) {
                        throw new TypeError(new Error("nearPlaneDistance >= farPlaneDistance"));
                    }

                    let num = 1 / (Math.tan((fieldOfView * 0.5)));
                    let num9 = num / aspectRatio;
                    result.M11 = num9;
                    result.M12 = result.M13 = result.M14 = 0;
                    result.M22 = num;
                    result.M21 = result.M23 = result.M24 = 0;
                    result.M31 = result.M32 = 0;
                    result.M33 = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                    result.M34 = -1;
                    result.M41 = result.M42 = result.M44 = 0;
                    result.M43 = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                    return result;
                })
        ).call(this, ...args);
    }

    static CreatePerspectiveOffCenter(...args) {
        return (
            Matrix.CreatePerspectiveOffCenter = Overload.Create().
                Add([Number, Number, Number, Number, Number, Number], function (left, right, bottom, top, nearPlaneDistance, farPlaneDistance) {
                    let result = new Matrix();

                    if (nearPlaneDistance <= 0) {
                        throw new TypeError(new Error("nearPlaneDistance <= 0"));
                    }

                    if (farPlaneDistance <= 0) {
                        throw new TypeError(new Error("farPlaneDistance <= 0"));
                    }

                    if (nearPlaneDistance >= farPlaneDistance) {
                        throw new TypeError(new Error("nearPlaneDistance >= farPlaneDistance"));
                    }

                    result.M11 = (2 * nearPlaneDistance) / (right - left);
                    result.M12 = result.M13 = result.M14 = 0;
                    result.M22 = (2 * nearPlaneDistance) / (top - bottom);
                    result.M21 = result.M23 = result.M24 = 0;
                    result.M31 = (left + right) / (right - left);
                    result.M32 = (top + bottom) / (top - bottom);
                    result.M33 = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
                    result.M34 = -1;
                    result.M43 = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
                    result.M41 = result.M42 = result.M44 = 0;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateReflection(...args) {
        return (
            Matrix.CreateReflection = Overload.Create().
                Add([Plane], function (value) {
                    let result = new Matrix();
                    let plane = Plane.Normalize(value);
                    value.Normalize();
                    var x = plane.Normal.X;
                    var y = plane.Normal.Y;
                    var z = plane.Normal.Z;
                    var num3 = -2 * x;
                    var num2 = -2 * y;
                    var num = -2 * z;
                    result.M11 = (num3 * x) + 1;
                    result.M12 = num2 * x;
                    result.M13 = num * x;
                    result.M14 = 0;
                    result.M21 = num3 * y;
                    result.M22 = (num2 * y) + 1;
                    result.M23 = num * y;
                    result.M24 = 0;
                    result.M31 = num3 * z;
                    result.M32 = num2 * z;
                    result.M33 = (num * z) + 1;
                    result.M34 = 0;
                    result.M41 = num3 * plane.D;
                    result.M42 = num2 * plane.D;
                    result.M43 = num * plane.D;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateRotationX(...args) {
        return (
            Matrix.CreateRotationX = Overload.Create().
                Add([Number], function (radians) {
                    let result = Matrix.Identity;

                    let val1 = Math.cos(radians);
                    let val2 = Math.sin(radians);

                    result.M22 = val1;
                    result.M23 = val2;
                    result.M32 = -val2;
                    result.M33 = val1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateRotationY(...args) {
        return (
            Matrix.CreateRotationX = Overload.Create().
                Add([Number], function (radians) {
                    let result = Matrix.Identity;

                    let val1 = Math.cos(radians);
                    let val2 = Math.sin(radians);

                    result.M11 = val1;
                    result.M13 = -val2;
                    result.M31 = val2;
                    result.M33 = val1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateRotationZ(...args) {
        return (
            Matrix.CreateRotationZ = Overload.Create().
                Add([Number], function (radians) {
                    let result = Matrix.Identity;

                    let val1 = Math.cos(radians);
                    let val2 = Math.sin(radians);

                    result.M11 = val1;
                    result.M12 = val2;
                    result.M21 = -val2;
                    result.M22 = val1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateScale(...args) {
        return (
            Matrix.CreateScale = Overload.Create().
                Add([Number], function (scale) {
                    return Matrix.CreateScale(scale, scale, scale);
                }).
                Add([Vector3], function (scales) {
                    return Matrix.CreateScale(scales.X, scales.Y, scales.Z);
                }).
                Add([Number, Number, Number], function (xScale, yScale, zScale) {
                    let result = new Matrix();
                    result.M11 = xScale;
                    result.M12 = 0;
                    result.M13 = 0;
                    result.M14 = 0;
                    result.M21 = 0;
                    result.M22 = yScale;
                    result.M23 = 0;
                    result.M24 = 0;
                    result.M31 = 0;
                    result.M32 = 0;
                    result.M33 = zScale;
                    result.M34 = 0;
                    result.M41 = 0;
                    result.M42 = 0;
                    result.M43 = 0;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateShadow(...args) {
        return (
            Matrix.CreateShadow = Overload.Create().
                Add([Vector3, Plane], function (lightDirection, plane) {
                    let result = new Matrix();
                    plane = Plane.Normalize(plane);
                    let dot = (plane.Normal.X * lightDirection.X) + (plane.Normal.Y * lightDirection.Y) + (plane.Normal.Z * lightDirection.Z);
                    let x = -plane.Normal.X;
                    let y = -plane.Normal.Y;
                    let z = -plane.Normal.Z;
                    let d = -plane.D;

                    result.M11 = (x * lightDirection.X) + dot;
                    result.M12 = x * lightDirection.Y;
                    result.M13 = x * lightDirection.Z;
                    result.M14 = 0;
                    result.M21 = y * lightDirection.X;
                    result.M22 = (y * lightDirection.Y) + dot;
                    result.M23 = y * lightDirection.Z;
                    result.M24 = 0;
                    result.M31 = z * lightDirection.X;
                    result.M32 = z * lightDirection.Y;
                    result.M33 = (z * lightDirection.Z) + dot;
                    result.M34 = 0;
                    result.M41 = d * lightDirection.X;
                    result.M42 = d * lightDirection.Y;
                    result.M43 = d * lightDirection.Z;
                    result.M44 = dot;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateTranslation(...args) {
        return (
            Matrix.CreateTranslation = Overload.Create().
                Add([Vector3], function (position) {
                    return Matrix.CreateTranslation(position.X, position.Y, position.Z);
                }).
                Add([Number, Number, Number], function (xPosition, yPosition, zPosition) {
                    let result = new Matrix();
                    result.M11 = 1;
                    result.M12 = 0;
                    result.M13 = 0;
                    result.M14 = 0;
                    result.M21 = 0;
                    result.M22 = 1;
                    result.M23 = 0;
                    result.M24 = 0;
                    result.M31 = 0;
                    result.M32 = 0;
                    result.M33 = 1;
                    result.M34 = 0;
                    result.M41 = xPosition;
                    result.M42 = yPosition;
                    result.M43 = zPosition;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateWorld(...args) {
        return (
            Matrix.CreateWorld = Overload.Create().
                Add([Vector3, Vector3, Vector3], function (position, forward, up) {
                    let z = Vector3.Normalize(forward);
                    let x = Vector3.Cross(forward, up);
                    let y = Vector3.Cross(x, forward);
                    x.Normalize();
                    y.Normalize();

                    let result = new Matrix();
                    result.Right = x;
                    result.Up = y;
                    result.Forward = z;
                    result.Translation = position;
                    result.M44 = 1;
                    return result;
                })
        ).call(this, ...args);
    }

    Decompose(...args) {
        return (
            Matrix.prototype.Decompose = Overload.Create().
                Add([Vector3, Quaternion, Vector3], function (scale, rotation, translation) {
                    translation.X = this.M41;
                    translation.Y = this.M42;
                    translation.Z = this.M43;

                    let xs = (Math.sign(this.M11 * this.M12 * this.M13 * this.M14) < 0) ? -1 : 1;
                    let ys = (Math.sign(this.M21 * this.M22 * this.M23 * this.M24) < 0) ? -1 : 1;
                    let zs = (Math.sign(this.M31 * this.M32 * this.M33 * this.M34) < 0) ? -1 : 1;

                    scale.X = xs * Math.sqrt(this.M11 * this.M11 + this.M12 * this.M12 + this.M13 * this.M13);
                    scale.Y = ys * Math.sqrt(this.M21 * this.M21 + this.M22 * this.M22 + this.M23 * this.M23);
                    scale.Z = zs * Math.sqrt(this.M31 * this.M31 + this.M32 * this.M32 + this.M33 * this.M33);

                    if (scale.X == 0.0 || scale.Y == 0.0 || scale.Z == 0.0) {
                        let quaternion = Quaternion.Identity;
                        rotation.X = quaternion.X;
                        rotation.Y = quaternion.Y;
                        rotation.Z = quaternion.Z;
                        rotation.W = quaternion.W;
                        return false;
                    }

                    let m1 = new Matrix(this.M11 / scale.X, this.M12 / scale.X, this.M13 / scale.X, 0,
                        this.M21 / scale.Y, this.M22 / scale.Y, this.M23 / scale.Y, 0,
                        this.M31 / scale.Z, this.M32 / scale.Z, this.M33 / scale.Z, 0,
                        0, 0, 0, 1);

                    let quaternion = Quaternion.CreateFromRotationMatrix(m1);
                    rotation.X = quaternion.X;
                    rotation.Y = quaternion.Y;
                    rotation.Z = quaternion.Z;
                    rotation.W = quaternion.W;
                    return true;
                })
        ).call(this, ...args);
    }

    Determinant(...args) {
        return (
            Matrix.prototype.Determinant = Overload.Create().
                Add([], function () {
                    var num22 = this.M11;
                    var num21 = this.M12;
                    var num20 = this.M13;
                    var num19 = this.M14;
                    var num12 = this.M21;
                    var num11 = this.M22;
                    var num10 = this.M23;
                    var num9 = this.M24;
                    var num8 = this.M31;
                    var num7 = this.M32;
                    var num6 = this.M33;
                    var num5 = this.M34;
                    var num4 = this.M41;
                    var num3 = this.M42;
                    var num2 = this.M43;
                    var num = this.M44;
                    var num18 = (num6 * num) - (num5 * num2);
                    var num17 = (num7 * num) - (num5 * num3);
                    var num16 = (num7 * num2) - (num6 * num3);
                    var num15 = (num8 * num) - (num5 * num4);
                    var num14 = (num8 * num2) - (num6 * num4);
                    var num13 = (num8 * num3) - (num7 * num4);
                    return ((((num22 * (((num11 * num18) - (num10 * num17)) + (num9 * num16))) - (num21 * (((num12 * num18) - (num10 * num15)) + (num9 * num14)))) + (num20 * (((num12 * num17) - (num11 * num15)) + (num9 * num13)))) - (num19 * (((num12 * num16) - (num11 * num14)) + (num10 * num13))));
                })
        ).call(this, ...args);
    }

    static Divide(...args) {
        return (
            Matrix.Divide = Overload.Create().
                Add([Matrix, Number], function (matrix1, divider) {
                    let result = new Matrix();
                    let num = 1 / divider;
                    result.M11 = matrix1.M11 * num;
                    result.M12 = matrix1.M12 * num;
                    result.M13 = matrix1.M13 * num;
                    result.M14 = matrix1.M14 * num;
                    result.M21 = matrix1.M21 * num;
                    result.M22 = matrix1.M22 * num;
                    result.M23 = matrix1.M23 * num;
                    result.M24 = matrix1.M24 * num;
                    result.M31 = matrix1.M31 * num;
                    result.M32 = matrix1.M32 * num;
                    result.M33 = matrix1.M33 * num;
                    result.M34 = matrix1.M34 * num;
                    result.M41 = matrix1.M41 * num;
                    result.M42 = matrix1.M42 * num;
                    result.M43 = matrix1.M43 * num;
                    result.M44 = matrix1.M44 * num;
                    return result;
                }).
                Add([Matrix, Matrix], function (matrix1, matrix2) {
                    let result = new Matrix();
                    result.M11 = matrix1.M11 / matrix2.M11;
                    result.M12 = matrix1.M12 / matrix2.M12;
                    result.M13 = matrix1.M13 / matrix2.M13;
                    result.M14 = matrix1.M14 / matrix2.M14;
                    result.M21 = matrix1.M21 / matrix2.M21;
                    result.M22 = matrix1.M22 / matrix2.M22;
                    result.M23 = matrix1.M23 / matrix2.M23;
                    result.M24 = matrix1.M24 / matrix2.M24;
                    result.M31 = matrix1.M31 / matrix2.M31;
                    result.M32 = matrix1.M32 / matrix2.M32;
                    result.M33 = matrix1.M33 / matrix2.M33;
                    result.M34 = matrix1.M34 / matrix2.M34;
                    result.M41 = matrix1.M41 / matrix2.M41;
                    result.M42 = matrix1.M42 / matrix2.M42;
                    result.M43 = matrix1.M43 / matrix2.M43;
                    result.M44 = matrix1.M44 / matrix2.M44;
                    return result;
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            Matrix.prototype.Equals = Overload.Create().
                Add([Matrix], function (other) {
                    return Math.abs(this.M11 - other.M11) < 1e-6 &&
                        Math.abs(this.M22 - other.M22) < 1e-6 &&
                        Math.abs(this.M33 - other.M33) < 1e-6 &&
                        Math.abs(this.M44 - other.M44) < 1e-6 &&
                        Math.abs(this.M12 - other.M12) < 1e-6 &&
                        Math.abs(this.M13 - other.M13) < 1e-6 &&
                        Math.abs(this.M14 - other.M14) < 1e-6 &&
                        Math.abs(this.M21 - other.M21) < 1e-6 &&
                        Math.abs(this.M23 - other.M23) < 1e-6 &&
                        Math.abs(this.M24 - other.M24) < 1e-6 &&
                        Math.abs(this.M31 - other.M31) < 1e-6 &&
                        Math.abs(this.M32 - other.M32) < 1e-6 &&
                        Math.abs(this.M34 - other.M34) < 1e-6 &&
                        Math.abs(this.M41 - other.M41) < 1e-6 &&
                        Math.abs(this.M42 - other.M42) < 1e-6 &&
                        Math.abs(this.M43 - other.M43) < 1e-6;
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Matrix.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    return (((((((((((((((this.M11 + this.M12) + this.M13) + this.M14) + this.M21) + this.M22) + this.M23) + this.M24) + this.M31) + this.M32) + this.M33) + this.M34) + this.M41) + this.M42) + this.M43) + this.M44);
                })
        ).call(this, ...args);
    }

    static Invert(...args) {
        return (
            Matrix.Invert = Overload.Create().
                Add([Matrix], function (matrix) {
                    let result = new Matrix();
                    let num1 = matrix.M11;
                    let num2 = matrix.M12;
                    let num3 = matrix.M13;
                    let num4 = matrix.M14;
                    let num5 = matrix.M21;
                    let num6 = matrix.M22;
                    let num7 = matrix.M23;
                    let num8 = matrix.M24;
                    let num9 = matrix.M31;
                    let num10 = matrix.M32;
                    let num11 = matrix.M33;
                    let num12 = matrix.M34;
                    let num13 = matrix.M41;
                    let num14 = matrix.M42;
                    let num15 = matrix.M43;
                    let num16 = matrix.M44;
                    let num17 = (num11 * num16 - num12 * num15);
                    let num18 = (num10 * num16 - num12 * num14);
                    let num19 = (num10 * num15 - num11 * num14);
                    let num20 = (num9 * num16 - num12 * num13);
                    let num21 = (num9 * num15 - num11 * num13);
                    let num22 = (num9 * num14 - num10 * num13);
                    let num23 = (num6 * num17 - num7 * num18 + num8 * num19);
                    let num24 = -(num5 * num17 - num7 * num20 + num8 * num21);
                    let num25 = (num5 * num18 - num6 * num20 + num8 * num22);
                    let num26 = -(num5 * num19 - num6 * num21 + num7 * num22);
                    let num27 = (1.0 / (num1 * num23 + num2 * num24 + num3 * num25 + num4 * num26));

                    result.M11 = num23 * num27;
                    result.M21 = num24 * num27;
                    result.M31 = num25 * num27;
                    result.M41 = num26 * num27;
                    result.M12 = -(num2 * num17 - num3 * num18 + num4 * num19) * num27;
                    result.M22 = (num1 * num17 - num3 * num20 + num4 * num21) * num27;
                    result.M32 = -(num1 * num18 - num2 * num20 + num4 * num22) * num27;
                    result.M42 = (num1 * num19 - num2 * num21 + num3 * num22) * num27;
                    var num28 = (num7 * num16 - num8 * num15);
                    var num29 = (num6 * num16 - num8 * num14);
                    var num30 = (num6 * num15 - num7 * num14);
                    var num31 = (num5 * num16 - num8 * num13);
                    var num32 = (num5 * num15 - num7 * num13);
                    var num33 = (num5 * num14 - num6 * num13);
                    result.M13 = (num2 * num28 - num3 * num29 + num4 * num30) * num27;
                    result.M23 = -(num1 * num28 - num3 * num31 + num4 * num32) * num27;
                    result.M33 = (num1 * num29 - num2 * num31 + num4 * num33) * num27;
                    result.M43 = -(num1 * num30 - num2 * num32 + num3 * num33) * num27;
                    var num34 = (num7 * num12 - num8 * num11);
                    var num35 = (num6 * num12 - num8 * num10);
                    var num36 = (num6 * num11 - num7 * num10);
                    var num37 = (num5 * num12 - num8 * num9);
                    var num38 = (num5 * num11 - num7 * num9);
                    var num39 = (num5 * num10 - num6 * num9);
                    result.M14 = -(num2 * num34 - num3 * num35 + num4 * num36) * num27;
                    result.M24 = (num1 * num34 - num3 * num37 + num4 * num38) * num27;
                    result.M34 = -(num1 * num35 - num2 * num37 + num4 * num39) * num27;
                    result.M44 = (num1 * num36 - num2 * num38 + num3 * num39) * num27;
                    return result;
                })
        ).call(this, ...args);
    }

    static Lerp(...args) {
        return (
            Matrix.Lerp = Overload.Create().
                Add([Matrix, Matrix, Number], function (matrix1, matrix2, amount) {
                    let result = new Matrix();
                    result.M11 = matrix1.M11 + ((matrix2.M11 - matrix1.M11) * amount);
                    result.M12 = matrix1.M12 + ((matrix2.M12 - matrix1.M12) * amount);
                    result.M13 = matrix1.M13 + ((matrix2.M13 - matrix1.M13) * amount);
                    result.M14 = matrix1.M14 + ((matrix2.M14 - matrix1.M14) * amount);
                    result.M21 = matrix1.M21 + ((matrix2.M21 - matrix1.M21) * amount);
                    result.M22 = matrix1.M22 + ((matrix2.M22 - matrix1.M22) * amount);
                    result.M23 = matrix1.M23 + ((matrix2.M23 - matrix1.M23) * amount);
                    result.M24 = matrix1.M24 + ((matrix2.M24 - matrix1.M24) * amount);
                    result.M31 = matrix1.M31 + ((matrix2.M31 - matrix1.M31) * amount);
                    result.M32 = matrix1.M32 + ((matrix2.M32 - matrix1.M32) * amount);
                    result.M33 = matrix1.M33 + ((matrix2.M33 - matrix1.M33) * amount);
                    result.M34 = matrix1.M34 + ((matrix2.M34 - matrix1.M34) * amount);
                    result.M41 = matrix1.M41 + ((matrix2.M41 - matrix1.M41) * amount);
                    result.M42 = matrix1.M42 + ((matrix2.M42 - matrix1.M42) * amount);
                    result.M43 = matrix1.M43 + ((matrix2.M43 - matrix1.M43) * amount);
                    result.M44 = matrix1.M44 + ((matrix2.M44 - matrix1.M44) * amount);
                    return result;
                })
        ).call(this, ...args);
    }

    static Multiply(...args) {
        return (
            Matrix.Multiply = Overload.Create().
                Add([Matrix, Number], function (matrix1, scaleFactor) {
                    let result = new Matrix();
                    result.M11 = matrix1.M11 * scaleFactor;
                    result.M12 = matrix1.M12 * scaleFactor;
                    result.M13 = matrix1.M13 * scaleFactor;
                    result.M14 = matrix1.M14 * scaleFactor;
                    result.M21 = matrix1.M21 * scaleFactor;
                    result.M22 = matrix1.M22 * scaleFactor;
                    result.M23 = matrix1.M23 * scaleFactor;
                    result.M24 = matrix1.M24 * scaleFactor;
                    result.M31 = matrix1.M31 * scaleFactor;
                    result.M32 = matrix1.M32 * scaleFactor;
                    result.M33 = matrix1.M33 * scaleFactor;
                    result.M34 = matrix1.M34 * scaleFactor;
                    result.M41 = matrix1.M41 * scaleFactor;
                    result.M42 = matrix1.M42 * scaleFactor;
                    result.M43 = matrix1.M43 * scaleFactor;
                    result.M44 = matrix1.M44 * scaleFactor;
                    return result;
                }).
                Add([Matrix, Matrix], function (matrix1, matrix2) {
                    let result = new Matrix();
                    let m11 = (((matrix1.M11 * matrix2.M11) + (matrix1.M12 * matrix2.M21)) + (matrix1.M13 * matrix2.M31)) + (matrix1.M14 * matrix2.M41);
                    let m12 = (((matrix1.M11 * matrix2.M12) + (matrix1.M12 * matrix2.M22)) + (matrix1.M13 * matrix2.M32)) + (matrix1.M14 * matrix2.M42);
                    let m13 = (((matrix1.M11 * matrix2.M13) + (matrix1.M12 * matrix2.M23)) + (matrix1.M13 * matrix2.M33)) + (matrix1.M14 * matrix2.M43);
                    let m14 = (((matrix1.M11 * matrix2.M14) + (matrix1.M12 * matrix2.M24)) + (matrix1.M13 * matrix2.M34)) + (matrix1.M14 * matrix2.M44);
                    let m21 = (((matrix1.M21 * matrix2.M11) + (matrix1.M22 * matrix2.M21)) + (matrix1.M23 * matrix2.M31)) + (matrix1.M24 * matrix2.M41);
                    let m22 = (((matrix1.M21 * matrix2.M12) + (matrix1.M22 * matrix2.M22)) + (matrix1.M23 * matrix2.M32)) + (matrix1.M24 * matrix2.M42);
                    let m23 = (((matrix1.M21 * matrix2.M13) + (matrix1.M22 * matrix2.M23)) + (matrix1.M23 * matrix2.M33)) + (matrix1.M24 * matrix2.M43);
                    let m24 = (((matrix1.M21 * matrix2.M14) + (matrix1.M22 * matrix2.M24)) + (matrix1.M23 * matrix2.M34)) + (matrix1.M24 * matrix2.M44);
                    let m31 = (((matrix1.M31 * matrix2.M11) + (matrix1.M32 * matrix2.M21)) + (matrix1.M33 * matrix2.M31)) + (matrix1.M34 * matrix2.M41);
                    let m32 = (((matrix1.M31 * matrix2.M12) + (matrix1.M32 * matrix2.M22)) + (matrix1.M33 * matrix2.M32)) + (matrix1.M34 * matrix2.M42);
                    let m33 = (((matrix1.M31 * matrix2.M13) + (matrix1.M32 * matrix2.M23)) + (matrix1.M33 * matrix2.M33)) + (matrix1.M34 * matrix2.M43);
                    let m34 = (((matrix1.M31 * matrix2.M14) + (matrix1.M32 * matrix2.M24)) + (matrix1.M33 * matrix2.M34)) + (matrix1.M34 * matrix2.M44);
                    let m41 = (((matrix1.M41 * matrix2.M11) + (matrix1.M42 * matrix2.M21)) + (matrix1.M43 * matrix2.M31)) + (matrix1.M44 * matrix2.M41);
                    let m42 = (((matrix1.M41 * matrix2.M12) + (matrix1.M42 * matrix2.M22)) + (matrix1.M43 * matrix2.M32)) + (matrix1.M44 * matrix2.M42);
                    let m43 = (((matrix1.M41 * matrix2.M13) + (matrix1.M42 * matrix2.M23)) + (matrix1.M43 * matrix2.M33)) + (matrix1.M44 * matrix2.M43);
                    let m44 = (((matrix1.M41 * matrix2.M14) + (matrix1.M42 * matrix2.M24)) + (matrix1.M43 * matrix2.M34)) + (matrix1.M44 * matrix2.M44);
                    result.M11 = m11;
                    result.M12 = m12;
                    result.M13 = m13;
                    result.M14 = m14;
                    result.M21 = m21;
                    result.M22 = m22;
                    result.M23 = m23;
                    result.M24 = m24;
                    result.M31 = m31;
                    result.M32 = m32;
                    result.M33 = m33;
                    result.M34 = m34;
                    result.M41 = m41;
                    result.M42 = m42;
                    result.M43 = m43;
                    result.M44 = m44;
                    return result;
                })
        ).call(this, ...args);
    }

    static Negate(...args) {
        return (
            Matrix.Negate = Overload.Create().
                Add([Matrix], function (matrix) {
                    let result = new Matrix();
                    result.M11 = -matrix.M11;
                    result.M12 = -matrix.M12;
                    result.M13 = -matrix.M13;
                    result.M14 = -matrix.M14;
                    result.M21 = -matrix.M21;
                    result.M22 = -matrix.M22;
                    result.M23 = -matrix.M23;
                    result.M24 = -matrix.M24;
                    result.M31 = -matrix.M31;
                    result.M32 = -matrix.M32;
                    result.M33 = -matrix.M33;
                    result.M34 = -matrix.M34;
                    result.M41 = -matrix.M41;
                    result.M42 = -matrix.M42;
                    result.M43 = -matrix.M43;
                    result.M44 = -matrix.M44;
                    return result;
                })
        ).call(this, ...args);
    }

    static Subtract(...args) {
        return (
            Matrix.Subtract = Overload.Create().
                Add([Matrix, Matrix], function (matrix1, matrix2) {
                    let result = new Matrix();
                    result.M11 = matrix1.M11 - matrix2.M11;
                    result.M12 = matrix1.M12 - matrix2.M12;
                    result.M13 = matrix1.M13 - matrix2.M13;
                    result.M14 = matrix1.M14 - matrix2.M14;
                    result.M21 = matrix1.M21 - matrix2.M21;
                    result.M22 = matrix1.M22 - matrix2.M22;
                    result.M23 = matrix1.M23 - matrix2.M23;
                    result.M24 = matrix1.M24 - matrix2.M24;
                    result.M31 = matrix1.M31 - matrix2.M31;
                    result.M32 = matrix1.M32 - matrix2.M32;
                    result.M33 = matrix1.M33 - matrix2.M33;
                    result.M34 = matrix1.M34 - matrix2.M34;
                    result.M41 = matrix1.M41 - matrix2.M41;
                    result.M42 = matrix1.M42 - matrix2.M42;
                    result.M43 = matrix1.M43 - matrix2.M43;
                    result.M44 = matrix1.M44 - matrix2.M44;
                    return result;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Matrix.prototype.ToString = Overload.Create().
                Add([], function () {
                    return "{M11:" + this.M11 + " M12:" + this.M12 + " M13:" + this.M13 + " M14:" + this.M14 + "} " +
                        "{M21:" + this.M21 + " M22:" + this.M22 + " M23:" + this.M23 + " M24:" + this.M24 + "} " +
                        "{M31:" + this.M31 + " M32:" + this.M32 + " M33:" + this.M33 + " M34:" + this.M34 + "} " +
                        "{M41:" + this.M41 + " M42:" + this.M42 + " M43:" + this.M43 + " M44:" + this.M44 + "}";
                })
        ).call(this, ...args);
    }

    static Transform(...args) {
        return (
            Matrix.Transform = Overload.Create().
                Add([Matrix, Quaternion], function (value, rotation) {
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

                    let q11 = 1.0 - yy2 - zz2;
                    let q21 = xy2 - wz2;
                    let q31 = xz2 + wy2;

                    let q12 = xy2 + wz2;
                    let q22 = 1.0 - xx2 - zz2;
                    let q32 = yz2 - wx2;

                    let q13 = xz2 - wy2;
                    let q23 = yz2 + wx2;
                    let q33 = 1.0 - xx2 - yy2;

                    let result = new Matrix();

                    result.M11 = value.M11 * q11 + value.M12 * q21 + value.M13 * q31;
                    result.M12 = value.M11 * q12 + value.M12 * q22 + value.M13 * q32;
                    result.M13 = value.M11 * q13 + value.M12 * q23 + value.M13 * q33;
                    result.M14 = value.M14;
                    result.M21 = value.M21 * q11 + value.M22 * q21 + value.M23 * q31;
                    result.M22 = value.M21 * q12 + value.M22 * q22 + value.M23 * q32;
                    result.M23 = value.M21 * q13 + value.M22 * q23 + value.M23 * q33;
                    result.M24 = value.M24;
                    result.M31 = value.M31 * q11 + value.M32 * q21 + value.M33 * q31;
                    result.M32 = value.M31 * q12 + value.M32 * q22 + value.M33 * q32;
                    result.M33 = value.M31 * q13 + value.M32 * q23 + value.M33 * q33;
                    result.M34 = value.M34;
                    result.M41 = value.M41 * q11 + value.M42 * q21 + value.M43 * q31;
                    result.M42 = value.M41 * q12 + value.M42 * q22 + value.M43 * q32;
                    result.M43 = value.M41 * q13 + value.M42 * q23 + value.M43 * q33;
                    result.M44 = value.M44;
                    return result;
                })
        ).call(this, ...args);
    }

    static Transpose(...args) {
        return (
            Matrix.Transpose = Overload.Create().
                Add([Matrix], function (matrix) {
                    let result = new Matrix();

                    result.M11 = matrix.M11;
                    result.M12 = matrix.M21;
                    result.M13 = matrix.M31;
                    result.M14 = matrix.M41;

                    result.M21 = matrix.M12;
                    result.M22 = matrix.M22;
                    result.M23 = matrix.M32;
                    result.M24 = matrix.M42;

                    result.M31 = matrix.M13;
                    result.M32 = matrix.M23;
                    result.M33 = matrix.M33;
                    result.M34 = matrix.M43;

                    result.M41 = matrix.M14;
                    result.M42 = matrix.M24;
                    result.M43 = matrix.M34;
                    result.M44 = matrix.M44;

                    return result;
                })
        ).call(this, ...args);
    }

    toJSON() {
        let obj = {};
        for (let x = 1; x <= 4; x++) {
            for (let y = 1; y <= 4; y++) {
                obj[`M${y}${x}`] = this[`M${y}${x}`];
            }
        }
        return super.toJSON(obj);
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (obj['Symbol'] !== Matrix[Symbol.name]) {
            throw new TypeError('Unrecognized type');
        }
        return new Matrix(obj.M11, obj.M12, obj.M13, obj.M14,
            obj.M21, obj.M22, obj.M23, obj.M24,
            obj.M31, obj.M32, obj.M33, obj.M34,
            obj.M41, obj.M42, obj.M43, obj.M44);
    }
}

export default Matrix;