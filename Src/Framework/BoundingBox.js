import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector3 from './Vector3.js';
import BoundingSphere from './BoundingSphere.js';
import BoundingFrustum from './BoundingFrustum.js';
import ContainmentType from './ContainmentType.js';
import Ray from './Ray.js';
import Plane from './Plane.js';
import PlaneIntersectionType from './PlaneIntersectionType.js';
import TypeList from '../Core/TypeList.js';

class BoundingBox extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            Min: {
                get: () => {
                    return this._getPrivateVar('_min');
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this._setPrivateVar('_min', value);
                    })
            },
            Max: {
                get: () => {
                    return this._getPrivateVar('_max');
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this._setPrivateVar('_max', value);
                    })
            }
        });

        (BoundingBox.prototype.constructor._init || (BoundingBox.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.Min = Vector3.Zero;
                this.Max = Vector3.Zero;
            }).
            Add([Vector3, Vector3], function (min, max) {
                this.Min = min;
                this.Max = max;
            })
        )).call(this, ...args);
    }

    static get CornerCount() {
        return 8;
    }

    Contains(...args) {
        return (
            BoundingBox.prototype.Contains = Overload.Create().
                Add([BoundingBox], function (box) {
                    if (box.Max.X < this.Min.X
                        || box.Min.X > this.Max.X
                        || box.Max.Y < this.Min.Y
                        || box.Min.Y > this.Max.Y
                        || box.Max.Z < this.Min.Z
                        || box.Min.Z > this.Max.Z) {
                        return ContainmentType.Disjoint;
                    }


                    if (box.Min.X >= this.Min.X
                        && box.Max.X <= this.Max.X
                        && box.Min.Y >= this.Min.Y
                        && box.Max.Y <= this.Max.Y
                        && box.Min.Z >= this.Min.Z
                        && box.Max.Z <= this.Max.Z) {
                        return ContainmentType.Contains;
                    }

                    return ContainmentType.Intersects;
                }).
                Add([BoundingSphere], function (sphere) {
                    if (sphere.Center.X - this.Min.X >= sphere.Radius
                        && sphere.Center.Y - this.Min.Y >= sphere.Radius
                        && sphere.Center.Z - this.Min.Z >= sphere.Radius
                        && this.Max.X - sphere.Center.X >= sphere.Radius
                        && this.Max.Y - sphere.Center.Y >= sphere.Radius
                        && this.Max.Z - sphere.Center.Z >= sphere.Radius) {
                        return ContainmentType.Contains;
                    }

                    let dmin = 0;

                    let e = sphere.Center.X - this.Min.X;
                    if (e < 0) {
                        if (e < -sphere.Radius) {
                            return ContainmentType.Disjoint;
                        }
                        dmin += e * e;
                    }
                    else {
                        e = sphere.Center.x - this.Max.X;
                        if (e > 0) {
                            if (e > sphere.Radius) {
                                return ContainmentType.Disjoint;
                            }
                            dmin += e * e;
                        }
                    }

                    e = sphere.Center.Y - this.Min.Y;
                    if (e < 0) {
                        if (e < -sphere.Radius) {
                            return ContainmentType.Disjoint;
                        }
                        dmin += e * e;
                    }
                    else {
                        e = sphere.Center.y - this.Max.Y;
                        if (e > 0) {
                            if (e > sphere.Radius) {
                                return ContainmentType.Disjoint;
                            }
                            dmin += e * e;
                        }
                    }

                    e = sphere.Center.Z - this.Min.Z;
                    if (e < 0) {
                        if (e < -sphere.Radius) {
                            return ContainmentType.Disjoint;
                        }
                        dmin += e * e;
                    }
                    else {
                        e = sphere.Center.Z - this.Max.Z;
                        if (e > 0) {
                            if (e > sphere.Radius) {
                                return ContainmentType.Disjoint;
                            }
                            dmin += e * e;
                        }
                    }

                    if (dmin <= sphere.Radius * sphere.Radius) {
                        return ContainmentType.Intersects;
                    }

                    return ContainmentType.Disjoint;
                }).
                Add([BoundingFrustum], function (frustum) {
                    let i;
                    let contained;
                    let corners = frustum.GetCorners();

                    for (i = 0; i < corners.length; i++) {
                        contained = this.Contains(corners[i]);
                        if (contained == ContainmentType.Disjoint) {
                            break;
                        }
                    }

                    if (i == corners.length) {
                        return ContainmentType.Contains;
                    }

                    if (i != 0) {
                        return ContainmentType.Intersects;
                    }

                    i++;
                    for (; i < corners.length; i++) {
                        contained = this.Contains(corners[i]);
                        if (contained != ContainmentType.Contains) {
                            return ContainmentType.Intersects;
                        }
                    }

                    return ContainmentType.Contains;
                }).
                Add([Vector3], function (point) {
                    if (point.X < this.Min.X
                        || point.X > this.Max.X
                        || point.Y < this.Min.Y
                        || point.Y > this.Max.Y
                        || point.Z < this.Min.Z
                        || point.Z > this.Max.Z) {
                        return ContainmentType.Disjoint;
                    }
                    else {
                        return ContainmentType.Contains;
                    }
                })
        ).call(this, ...args);
    }

    static CreateFromPoints(...args) {
        return (
            BoundingBox.CreateFromPoints = Overload.Create().
                Add([TypeList.T(Vector3)], function (points) {
                    let empty = true;
                    let minVec = new Vector3(Number.MAX_VALUE);
                    let maxVec = new Vector3(Number.MIN_VALUE);

                    points.ForEach(function (ptVector, index) {
                        minVec.X = (minVec.X < ptVector.X) ? minVec.X : ptVector.X;
                        minVec.Y = (minVec.Y < ptVector.Y) ? minVec.Y : ptVector.Y;
                        minVec.Z = (minVec.Z < ptVector.Z) ? minVec.Z : ptVector.Z;

                        maxVec.X = (maxVec.X > ptVector.X) ? maxVec.X : ptVector.X;
                        maxVec.Y = (maxVec.Y > ptVector.Y) ? maxVec.Y : ptVector.Y;
                        maxVec.Z = (maxVec.Z > ptVector.Z) ? maxVec.Z : ptVector.Z;

                        empty = false;
                    });

                    if (empty) {
                        throw new TypeError();
                    }

                    return new BoundingBox(minVec, maxVec);
                })
        ).call(this, ...args);
    }

    static CreateFromSphere(...args) {
        return (
            BoundingBox.CreateFromSphere = Overload.Create().
                Add([BoundingSphere], function (sphere) {
                    let result = new BoundingBox();
                    let corner = new Vector3(sphere.Radius);
                    result.Min = Vector3.Subtract(sphere.Center, corner);
                    result.Max = Vector3.Add(sphere.Center, corner);
                    return result;
                })
        ).call(this, ...args);
    }

    static CreateMerged(...args) {
        return (
            BoundingBox.CreateMerged = Overload.Create().
                Add([BoundingBox, BoundingBox], function (original, additional) {
                    let result = new BoundingBox();
                    result.Min.X = Math.min(original.Min.X, additional.Min.X);
                    result.Min.Y = Math.min(original.Min.Y, additional.Min.Y);
                    result.Min.Z = Math.min(original.Min.Z, additional.Min.Z);
                    result.Max.X = Math.max(original.Max.X, additional.Max.X);
                    result.Max.Y = Math.max(original.Max.Y, additional.Max.Y);
                    result.Max.Z = Math.max(original.Max.Z, additional.Max.Z);
                    return result;
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            BoundingBox.prototype.Equals = Overload.Create().
                Add([BoundingBox], function (other) {
                    return (this.Min.Equals(other.Min) && this.Max.Equals(other.Max));
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetCorners(...args) {
        return (
            BoundingBox.prototype.GetCorners = Overload.Create().
                Add([], function () {
                    let list = new TypeList(Vector3);
                    list.AddRange([
                        new Vector3(this.Min.X, this.Max.Y, this.Max.Z),
                        new Vector3(this.Max.X, this.Max.Y, this.Max.Z),
                        new Vector3(this.Max.X, this.Min.Y, this.Max.Z),
                        new Vector3(this.Min.X, this.Min.Y, this.Max.Z),
                        new Vector3(this.Min.X, this.Max.Y, this.Min.Z),
                        new Vector3(this.Max.X, this.Max.Y, this.Min.Z),
                        new Vector3(this.Max.X, this.Min.Y, this.Min.Z),
                        new Vector3(this.Min.X, this.Min.Y, this.Min.Z)
                    ]);
                }).
                Add([TypeList.T(Vector3)], function (corners) {
                    if (corners.Length < 8) {
                        throw new TypeError("corners", "Not Enought Corners");
                    }

                    corners[0].X = this.Min.X;
                    corners[0].Y = this.Max.Y;
                    corners[0].Z = this.Max.Z;
                    corners[1].X = this.Max.X;
                    corners[1].Y = this.Max.Y;
                    corners[1].Z = this.Max.Z;
                    corners[2].X = this.Max.X;
                    corners[2].Y = this.Min.Y;
                    corners[2].Z = this.Max.Z;
                    corners[3].X = this.Min.X;
                    corners[3].Y = this.Min.Y;
                    corners[3].Z = this.Max.Z;
                    corners[4].X = this.Min.X;
                    corners[4].Y = this.Max.Y;
                    corners[4].Z = this.Min.Z;
                    corners[5].X = this.Max.X;
                    corners[5].Y = this.Max.Y;
                    corners[5].Z = this.Min.Z;
                    corners[6].X = this.Max.X;
                    corners[6].Y = this.Min.Y;
                    corners[6].Z = this.Min.Z;
                    corners[7].X = this.Min.X;
                    corners[7].Y = this.Min.Y;
                    corners[7].Z = this.Min.Z;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            BoundingBox.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    return this.Min.GetHashCode() + this.Max.GetHashCode();
                })
        ).call(this, ...args);
    }

    Intersects(...args) {
        return (
            BoundingBox.prototype.Intersects = Overload.Create().
                Add([BoundingBox], function (box) {
                    if ((this.Max.X >= box.Min.X) && (this.Min.X <= box.Max.X)) {
                        if ((this.Max.Y < box.Min.Y) || (this.Min.Y > box.Max.Y)) {
                            return false;
                        }

                        return (this.Max.Z >= box.Min.Z) && (this.Min.Z <= box.Max.Z);
                    }

                    return false;
                }).
                Add([BoundingSphere], function (sphere) {
                    return this.Contains(sphere) != ContainmentType.Disjoint;
                }).
                Add([BoundingFrustum], function (frustum) {
                    return frustum.Intersects(this);
                }).
                Add([Ray], function (ray) {
                    return ray.Intersects(this);
                }).
                Add([Plane], function (plane) {
                    let positiveVertex = new Vector3();
                    let negativeVertex = new Vector3();

                    if (plane.Normal.X >= 0) {
                        positiveVertex.X = this.Max.X;
                        negativeVertex.X = this.Min.X;
                    } else {
                        positiveVertex.X = this.Min.X;
                        negativeVertex.X = this.Max.X;
                    }

                    if (plane.Normal.Y >= 0) {
                        positiveVertex.Y = this.Max.Y;
                        negativeVertex.Y = this.Min.Y;
                    } else {
                        positiveVertex.Y = this.Min.Y;
                        negativeVertex.Y = this.Max.Y;
                    }

                    if (plane.Normal.Z >= 0) {
                        positiveVertex.Z = this.Max.Z;
                        negativeVertex.Z = this.Min.Z;
                    } else {
                        positiveVertex.Z = this.Min.Z;
                        negativeVertex.Z = this.Max.Z;
                    }

                    let distance = plane.Normal.X * negativeVertex.X + plane.Normal.Y * negativeVertex.Y + plane.Normal.Z * negativeVertex.Z + plane.D;
                    if (distance > 0) {
                        return PlaneIntersectionType.Front;
                    }

                    distance = plane.Normal.X * positiveVertex.X + plane.Normal.Y * positiveVertex.Y + plane.Normal.Z * positiveVertex.Z + plane.D;
                    if (distance < 0) {
                        return PlaneIntersectionType.Back;
                    }

                    return PlaneIntersectionType.Intersecting;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            BoundingBox.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{{Min:${this.Min.ToString()} Max:${this.Max.ToString()}}}`;
                })
        ).call(this, ...args);
    }

    Serialize(...args) {
        let superSerialize = super.Serialize;
        return (
            BoundingBox.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        Min: this.Min,
                        Max: this.Max
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            BoundingBox.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== BoundingBox.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    let min = Vector3.Deserialize(obj.Min);
                    let max = Vector3.Deserialize(obj.Max);
                    return new BoundingBox(min, max);
                })
        ).call(this, ...args);
    }
}

export default BoundingBox;