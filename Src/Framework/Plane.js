import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector3 from './Vector3.js';
import Vector4 from './Vector4.js';
import Matrix from './Matrix.js';
import Quaternion from './Quaternion.js';
import BoundingSphere from './BoundingSphere.js';
import BoundingFrustum from './BoundingFrustum.js';
import BoundingBox from './BoundingBox.js';
import PlaneIntersectionType from './PlaneIntersectionType.js';

class Plane extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            Normal: {
                get: () => {
                    return this._getPrivateVar('_normal');
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this._setPrivateVar('_normal', value);
                    })
            },
            D: {
                get: () => {
                    return this._getPrivateVar('_d');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_d', value);
                    })
            }
        });

        (Plane.prototype.constructor._init || (Plane.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.Normal = Vector3.Zero;
                this.D = 0;
            }).
            Add([Vector3, Vector3, Vector3], function (point1, point2, point3) {
                let ab = Vector3.Subtract(point2, point1);
                let ac = Vector3.Subtract(point3, point1);

                let cross = Vector3.Cross(ab, ac);
                this.Normal = Vector3.Normalize(cross);
                this.D = -(Vector3.Dot(Normal, point1));
            }).
            Add([Vector4], function (value) {
                this.Normal = new Vector3(value.X, value.Y, value.Z);
                this.D = value.W;
            }).
            Add([Vector3, Number], function (normal, d) {
                this.Normal = normal;
                this.D = d;
            }).
            Add([Number, Number, Number, Number], function (a, b, c, d) {
                this.Normal = new Vector3(a, b, c);
                this.D = d;
            })
        )).call(this, ...args);
    }

    static get [Symbol.name]() {
        return 'Plane';
    }

    Dot(...args) {
        return (
            Plane.prototype.Dot = Overload.Create().
                Add([Vector4], function (value) {
                    return ((((this.Normal.X * value.X) + (this.Normal.Y * value.Y)) + (this.Normal.Z * value.Z)) + (this.D * value.W));
                })
        ).call(this, ...args);
    }

    DotCoordinate(...args) {
        return (
            Plane.prototype.DotCoordinate = Overload.Create().
                Add([Vector3], function (value) {
                    return ((((this.Normal.X * value.X) + (this.Normal.Y * value.Y)) + (this.Normal.Z * value.Z)) + this.D);
                })
        ).call(this, ...args);
    }

    DotNormal(...args) {
        return (
            Plane.prototype.DotNormal = Overload.Create().
                Add([Vector3], function (value) {
                    return (((this.Normal.X * value.X) + (this.Normal.Y * value.Y)) + (this.Normal.Z * value.Z));
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            Plane.prototype.Equals = Overload.Create().
                Add([Plane], function (other) {
                    return (this.Normal.Equals(other.Normal) && Math.abs(this.D - other.D) < 1e-6);
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Plane.prototype.GetHashCode = Overload.Create().
                Add([Plane], function (other) {
                    return this.Normal.GetHashCode() ^ this.D;
                })
        ).call(this, ...args);
    }

    Intersects(...args) {
        return (
            Plane.prototype.Intersects = Overload.Create().
                Add([BoundingSphere], function (sphere) {
                    return sphere.Intersects(this);
                }).
                Add([BoundingFrustum], function (frustum) {
                    return frustum.Intersects(this);
                }).
                Add([BoundingBox], function (box) {
                    return box.Intersects(this);
                }).
                Add([Vector3], function (point) {
                    let distance = this.DotCoordinate(point);

                    if (distance > 0)
                        return PlaneIntersectionType.Front;

                    if (distance < 0)
                        return PlaneIntersectionType.Back;

                    return PlaneIntersectionType.Intersecting;
                })
        ).call(this, ...args);
    }

    static Normalize(...args) {
        return (
            Plane.Normalize = Overload.Create().
                Add([Plane], function (value) {
                    let result = new Plane();
                    let factor;
                    result.Normal = Vector3.Normalize(value.Normal);
                    factor = Math.sqrt(result.Normal.X * result.Normal.X + result.Normal.Y * result.Normal.Y + result.Normal.Z * result.Normal.Z) /
                        Math.sqrt(value.Normal.X * value.Normal.X + value.Normal.Y * value.Normal.Y + value.Normal.Z * value.Normal.Z);
                    result.D = value.D * factor;
                    return result;
                })
        ).call(this, ...args);
    }

    Normalize(...args) {
        return (
            Plane.prototype.Normalize = Overload.Create().
                Add([], function () {
                    let factor;
                    let normal = Vector3.Normalize(this.Normal);
                    factor = Math.sqrt(normal.X * normal.X + normal.Y * normal.Y + normal.Z * normal.Z) /
                        Math.sqrt(this.Normal.X * this.Normal.x + this.Normal.y * this.Normal.y + this.Normal.z * this.Normal.z);
                    this.Normal = normal;
                    this.D *= factor;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Plane.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{Normal:${this.Normal.toString()} D:${this.D}}`;
                })
        ).call(this, ...args);
    }

    static Transform(...args) {
        return (
            Plane.Transform = Overload.Create().
                Add([Plane, Quaternion], function (plane, rotation) {
                    let result = new Plane();
                    result.Normal = Vector3.Transform(plane.Normal, rotation);
                    result.D = plane.D;
                    return result;
                }).
                Add([Plane, Matrix], function (plane, matrix) {
                    let transformedMatrix = Matrix.Transpose(Matrix.Invert(matrix));

                    let vector = new Vector4(plane.Normal, plane.D);

                    let transformedVector = Vector4.Transform(vector, transformedMatrix);

                    return new Plane(transformedVector);
                })
        ).call(this, ...args);
    }

    toJSON() {
        return super.toJSON({
            Normal: this.Normal,
            D: this.D
        });
    }

    static fromJSON(obj) {
        if (typeof obj === 'string') {
            obj = JSON.parse(obj);
        }
        if (obj['Symbol'] !== Plane[Symbol.name]) {
            throw new TypeError('Unrecognized type');
        }
        let normal = Vector3.fromJSON(obj.Normal);
        return new Plane(normal, obj.D);
    }
}

export default Plane;