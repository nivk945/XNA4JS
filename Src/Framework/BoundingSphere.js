import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector3 from './Vector3.js';
import ContainmentType from './ContainmentType.js';
import BoundingFrustum from './BoundingFrustum.js';
import BoundingBox from './BoundingBox.js';
import Ray from './Ray.js';
import Plane from './Plane.js';
import PlaneIntersectionType from './PlaneIntersectionType.js';
import Matrix from './Matrix.js';
import TypeList from '../Core/TypeList.js';

class BoundingSphere extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            Center: {
                get: () => {
                    return this._getPrivateVar('_center');
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this._setPrivateVar('_center', value);
                    })
            },
            Radius: {
                get: () => {
                    return this._getPrivateVar('_radius');
                },
                set: Overload.Create().
                    Add([Number], (value) => {
                        this._setPrivateVar('_radius', value);
                    })
            }
        });

        (BoundingSphere.prototype.constructor._init || (BoundingSphere.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.Center = Vector3.Zero;
                this.Radius = 0;
            }).
            Add([Vector3, Number], function (center, radius) {
                this.Center = center;
                this.Radius = radius;
            })
        )).call(this, ...args);
    }

    Contains(...args) {
        return (
            BoundingSphere.prototype.Contains = Overload.Create().
                Add([BoundingSphere], function (sphere) {
                    let sqDistance = Vector3.DistanceSquared(sphere.Center, this.Center);

                    if (sqDistance > (sphere.Radius + this.Radius) * (sphere.Radius + this.Radius)) return ContainmentType.Disjoint;
                    else if (sqDistance <= (this.Radius - sphere.Radius) * (this.Radius - sphere.Radius)) return ContainmentType.Contains;
                    else return ContainmentType.Intersects;
                }).
                Add([BoundingFrustum], function (frustum) {
                    let inside = true;

                    let corners = frustum.GetCorners();
                    for (let i = 0; i < corners.length; i++) {
                        if (this.Contains(corners[i]) === ContainmentType.Disjoint) {
                            inside = false;
                            break;
                        }
                    }

                    if (inside) {
                        return ContainmentType.Contains;
                    }

                    let dmin = 0;

                    if (dmin <= this.Radius * this.Radius) {
                        return ContainmentType.Intersects;
                    }

                    return ContainmentType.Disjoint;
                }).
                Add([BoundingBox], function (box) {
                    let inside = true;
                    let corners = box.GetCorners();
                    for (let i = 0; i < corners.length; i++) {
                        if (this.Contains(corners[i]) == ContainmentType.Disjoint) {
                            inside = false;
                            break;
                        }
                    }

                    if (inside) {
                        return ContainmentType.Contains;
                    }

                    let dmin = 0;

                    if (this.Center.X < box.Min.X) {
                        dmin += (this.Center.X - box.Min.X) * (this.Center.X - box.Min.X);
                    }
                    else if (this.Center.X > box.Max.X) {
                        dmin += (this.Center.X - box.Max.X) * (this.Center.X - box.Max.X);
                    }

                    if (this.Center.Y < box.Min.Y) dmin += (this.Center.Y - box.Min.Y) * (this.Center.Y - box.Min.Y);
                    else if (this.Center.Y > box.Max.Y) dmin += (this.Center.Y - box.Max.Y) * (this.Center.Y - box.Max.Y);

                    if (this.Center.Z < box.Min.Z) dmin += (this.Center.Z - box.Min.Z) * (this.Center.Z - box.Min.Z);
                    else if (this.Center.Z > box.Max.Z) dmin += (this.Center.Z - box.Max.Z) * (this.Center.Z - box.Max.Z);

                    if (dmin <= this.Radius * this.Radius) return ContainmentType.Intersects;

                    return ContainmentType.Disjoint;
                }).
                Add([Vector3], function (point) {
                    let sqRadius = this.Radius * this.Radius;
                    let sqDistance = Vector3.DistanceSquared(point, this.Center);

                    if (sqDistance > sqRadius) {
                        return ContainmentType.Disjoint;
                    }
                    else if (sqDistance < sqRadius) {
                        return ContainmentType.Contains;
                    }
                    else {
                        return ContainmentType.Intersects;
                    }
                })
        ).call(this, ...args);
    }

    static CreateFromBoundingBox(...args) {
        return (
            BoundingSphere.CreateFromBoundingBox = Overload.Create().
                Add([BoundingBox], function (box) {
                    let center = new Vector3((box.Min.X + box.Max.X) / 2.0,
                        (box.Min.Y + box.Max.Y) / 2.0,
                        (box.Min.Z + box.Max.Z) / 2.0);

                    let radius = Vector3.Distance(center, box.Max);

                    return new BoundingSphere(center, radius);
                })
        ).call(this, ...args);
    }

    static CreateFromFrustum(...args) {
        return (
            BoundingSphere.CreateFromFrustum = Overload.Create().
                Add([BoundingFrustum], function (frustum) {
                    return BoundingSphere.CreateFromPoints(frustum.GetCorners());
                })
        ).call(this, ...args);
    }

    static CreateFromPoints(...args) {
        return (
            BoundingSphere.CreateFromPoints = Overload.Create().
                Add([TypeList.T(Vector3)], function (points) {
                    let minx = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
                    let maxx = Vector3.Negate(minx);
                    let miny = new Vector3(minx.X, minx.Y, minx.Z);
                    let maxy = Vector3.Negate(minx);
                    let minz = new Vector3(minx.X, minx.Y, minx.Z);
                    let maxz = Vector3.Negate(minx);

                    let numPoints = 0;
                    points.ForEach(function (pt) {
                        ++numPoints;

                        if (pt.X < minx.X)
                            minx = pt;
                        if (pt.X > maxx.X)
                            maxx = pt;
                        if (pt.Y < miny.Y)
                            miny = pt;
                        if (pt.Y > maxy.Y)
                            maxy = pt;
                        if (pt.Z < minz.Z)
                            minz = pt;
                        if (pt.Z > maxz.Z)
                            maxz = pt;
                    });

                    if (numPoints == 0) {
                        throw new TypeError("You should have at least one point in points.");
                    }

                    let sqDistX = Vector3.DistanceSquared(maxx, minx);
                    let sqDistY = Vector3.DistanceSquared(maxy, miny);
                    let sqDistZ = Vector3.DistanceSquared(maxz, minz);

                    let min = minx;
                    let max = maxx;
                    if (sqDistY > sqDistX && sqDistY > sqDistZ) {
                        max = maxy;
                        min = miny;
                    }
                    if (sqDistZ > sqDistX && sqDistZ > sqDistY) {
                        max = maxz;
                        min = minz;
                    }

                    let center = Vector3.Multiply(Vector3.Add(min, max), 0.5);
                    let radius = Vector3.Distance(max, center);

                    let sqRadius = radius * radius;
                    points.ForEach(function (pt) {
                        let diff = Vector3.Subtract(pt, center);
                        let sqDist = diff.LengthSquared();
                        if (sqDist > sqRadius) {
                            let distance = Math.sqrt(sqDist);
                            let direction = Vector3.Divide(diff, distance);
                            let G = Vector3.Subtract(center, Vector3.Multiply(direction, radius));
                            center = Vector3.Divide(Vector3.Add(G, pt), 2);
                            radius = Vector3.Distance(pt, center);
                            sqRadius = radius * radius;
                        }
                    });

                    return new BoundingSphere(center, radius);
                })
        ).call(this, ...args);
    }

    static CreateMerged(...args) {
        return (
            BoundingSphere.CreateMerged = Overload.Create().
                Add([BoundingSphere, BoundingSphere], function (original, additional) {
                    let ocenterToaCenter = Vector3.Subtract(additional.Center, original.Center);
                    let distance = ocenterToaCenter.Length();
                    if (distance <= original.Radius + additional.Radius) {
                        if (distance <= original.Radius - additional.Radius) {
                            return new BoundingSphere(original.Center, original.Radius);
                        }
                        if (distance <= additional.Radius - original.Radius) {
                            return new BoundingSphere(additional.Center, additional.Radius);
                        }
                    }
                    let leftRadius = Math.max(original.Radius - distance, additional.Radius);
                    let Rightradius = Math.max(original.radius + distance, additional.Radius);
                    ocenterToaCenter = ocenterToaCenter + (((leftRadius - Rightradius) / (2 * ocenterToaCenter.Length())) * ocenterToaCenter);

                    let result = new BoundingSphere();
                    result.Center = original.Center + ocenterToaCenter;
                    result.Radius = (leftRadius + Rightradius) / 2;
                    return result;
                })
        ).call(this, ...args);
    }

    Equals(...args) {
        return (
            BoundingSphere.prototype.Equals = Overload.Create().
                Add([BoundingSphere], function (other) {
                    return this.Center.Equals(other.Center) && Math.abs(this.Radius - other.Radius) < 1e-6;
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            BoundingSphere.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    return this.Center.GetHashCode() + this.Radius;
                })
        ).call(this, ...args);
    }

    Intersects(...args) {
        return (
            BoundingSphere.prototype.Intersects = Overload.Create().
                Add([BoundingSphere], function (sphere) {
                    let sqDistance = Vector3.DistanceSquared(sphere.Center, this.Center);

                    if (sqDistance > (sphere.Radius + this.Radius) * (sphere.Radius + this.Radius)) {
                        return false;
                    } else {
                        return true;
                    }
                }).
                Add([BoundingFrustum], function (frustum) {
                    return frustum.Intersects(this);
                }).
                Add([BoundingBox], function (box) {
                    return box.Intersects(this);
                }).
                Add([Ray], function (ray) {
                    return ray.Intersects(this);
                }).
                Add([Plane], function (plane) {
                    let distance = Vector3.Dot(plane.Normal, this.Center);
                    distance += plane.D;
                    if (distance > this.Radius) return PlaneIntersectionType.Front;
                    else if (distance < -this.Radius) return PlaneIntersectionType.Back;
                    else return PlaneIntersectionType.Intersecting;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            BoundingSphere.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{Center:${this.Center.ToString()} Radius:${this.Radius}}`;
                })
        ).call(this, ...args);
    }

    Transform(...args) {
        return (
            BoundingSphere.prototype.Transform = Overload.Create().
                Add([Matrix], function (matrix) {
                    let sphere = new BoundingSphere();
                    sphere.Center = Vector3.Transform(this.Center, matrix);
                    sphere.Radius = this.Radius * (Math.sqrt(Math.max(((matrix.M11 * matrix.M11) + (matrix.M12 * matrix.M12)) + (matrix.M13 * matrix.M13), Math.max(((matrix.M21 * matrix.M21) + (matrix.M22 * matrix.M22)) + (matrix.M23 * matrix.M23), ((matrix.M31 * matrix.M31) + (matrix.M32 * matrix.M32)) + (matrix.M33 * matrix.M33)))));
                    return sphere;
                })
        ).call(this, ...args);
    }

    Serialize(...args) {
        let superSerialize = super.Serialize;
        return (
            BoundingSphere.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        Center: this.Center,
                        Radius: this.Radius
                    });
                })
        ).call(this, ...args);
    }

    static Deserialize(...args) {
        return (
            BoundingSphere.Deserialize = Overload.Create().
                Add([String], function (str) {
                    return this.Deserialize(JSON.parse(str));
                }).
                Add([window.Object], function (obj) {
                    if (obj['Symbol'] !== BoundingSphere.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    let center = Vector3.Deserialize(obj.Center);
                    return new BoundingSphere(center, obj.Radius);
                })
        ).call(this, ...args);
    }
}

export default BoundingSphere;