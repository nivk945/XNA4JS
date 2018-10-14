import Overload from '../Core/Overload.js';
import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector3 from './Vector3.js';
import BoundingSphere from './BoundingSphere.js';
import Plane from './Plane.js';
import BoundingFrustum from './BoundingFrustum.js';
import BoundingBox from './BoundingBox.js';

class Ray extends Object {
    constructor(...args) {
        super();

        window.Object.defineProperties(this, {
            Direction: {
                get: () => {
                    return this._getPrivateVar('_direction');
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this._setPrivateVar('_direction', value);
                    })
            },
            Position: {
                get: () => {
                    return this._getPrivateVar('_position');
                },
                set: Overload.Create().
                    Add([Vector3], (value) => {
                        this._setPrivateVar('_position', value);
                    })
            }
        });

        (Ray.prototype.constructor._init || (Ray.prototype.constructor._init = Overload.Create().
            Add([], function () {
                this.Position = Vector3.Zero;
                this.Direction = Vector3.Zero;
            }).
            Add([Vector3, Vector3], function (position, direction) {
                this.Position = position;
                this.Direction = direction;
            })
        )).call(this, ...args);
    }

    Equals(...args) {
        return (
            Ray.prototype.Equals = Overload.Create().
                Add([Ray], function (other) {
                    return this.Direction.Equals(other.Direction) && this.Position.Equals(other.Position);
                }).
                Add(['*'], function () {
                    return false;
                })
        ).call(this, ...args);
    }

    GetHashCode(...args) {
        return (
            Ray.prototype.GetHashCode = Overload.Create().
                Add([], function () {
                    return this.Position.GetHashCode() ^ this.Direction.GetHashCode();
                })
        ).call(this, ...args);
    }

    Intersects(...args) {
        return (
            Ray.prototype.Intersects = Overload.Create().
                Add([BoundingSphere], function (sphere) {
                    let difference = Vector3.Subtract(sphere.Center, this.Position);

                    let differenceLengthSquared = difference.LengthSquared();
                    let sphereRadiusSquared = sphere.Radius * sphere.Radius;

                    if (differenceLengthSquared < sphereRadiusSquared) {
                        return 0;
                    }

                    let distanceAlongRay = Vector3.Dot(this.Direction, difference);

                    if (distanceAlongRay < 0) {
                        return null;
                    }

                    let dist = sphereRadiusSquared + distanceAlongRay * distanceAlongRay - differenceLengthSquared;

                    return (dist < 0) ? null : distanceAlongRay - Math.sqrt(dist);
                }).
                Add([BoundingFrustum], function (frustum) {
                    if (frustum == null) {
                        throw new TypeError('frustum is null');
                    }

                    return frustum.Intersects(this);
                }).
                Add([BoundingBox], function (box) {
                    let Epsilon = 1e-6;

                    let tMin = null;
                    let tMax = null;
                    let positionX = this.Position.X;
                    let positionY = this.Position.Y;
                    let positionZ = this.Position.Z;
                    let directionX = this.Direction.X;
                    let directionY = this.Direction.Y;
                    let directionZ = this.Direction.Z;

                    if (Math.abs(directionX) < Epsilon) {
                        if (positionX < box.Min.X || positionX > box.Max.X)
                            return null;
                    }
                    else {
                        tMin = (box.Min.X - positionX) / directionX;
                        tMax = (box.Max.X - positionX) / directionX;

                        if (tMin > tMax) {
                            var temp = tMin;
                            tMin = tMax;
                            tMax = temp;
                        }
                    }

                    if (Math.abs(directionY) < Epsilon) {
                        if (positionY < box.Min.Y || positionY > box.Max.Y)
                            return null;
                    }
                    else {
                        var tMinY = (box.Min.Y - positionY) / directionY;
                        var tMaxY = (box.Max.Y - positionY) / directionY;

                        if (tMinY > tMaxY) {
                            var temp = tMinY;
                            tMinY = tMaxY;
                            tMaxY = temp;
                        }

                        if ((tMin !== null && tMin > tMaxY) || (tMax !== null && tMinY > tMax))
                            return null;

                        if (tMin === null || tMinY > tMin) tMin = tMinY;
                        if (tMax === null || tMaxY < tMax) tMax = tMaxY;
                    }

                    if (Math.abs(directionZ) < Epsilon) {
                        if (positionZ < box.Min.Z || positionZ > box.Max.Z)
                            return null;
                    }
                    else {
                        var tMinZ = (box.Min.Z - positionZ) / directionZ;
                        var tMaxZ = (box.Max.Z - positionZ) / directionZ;

                        if (tMinZ > tMaxZ) {
                            var temp = tMinZ;
                            tMinZ = tMaxZ;
                            tMaxZ = temp;
                        }

                        if ((tMin !== null && tMin > tMaxZ) || (tMax !== null && tMinZ > tMax))
                            return null;

                        if (tMin === null || tMinZ > tMin) tMin = tMinZ;
                        if (tMax === null || tMaxZ < tMax) tMax = tMaxZ;
                    }

                    if ((tMin !== null && tMin < 0) && tMax > 0) return 0;

                    if (tMin < 0) return null;

                    return tMin;
                }).
                Add([Plane], function (plane) {
                    let den = Vector3.Dot(this.Direction, plane.Normal);
                    if (Math.abs(den) < 0.00001) {
                        return null;
                    }

                    let result = (-plane.D - Vector3.Dot(plane.Normal, this.Position)) / den;

                    if (result < 0.0) {
                        if (result < -0.00001) {
                            return null;
                        }

                        result = 0.0;
                    }
                    return result;
                })
        ).call(this, ...args);
    }

    ToString(...args) {
        return (
            Ray.prototype.ToString = Overload.Create().
                Add([], function () {
                    return `{Position:${this.Position.ToString()} Direction:${this.Direction.ToString()}}`;
                })
        ).call(this, ...args);
    }

    Serialize(...args) {
        let superSerialize = super.Serialize;
        return (
            Quaternion.prototype.Serialize = Overload.Create().
                Add([String], function () {
                    return superSerialize.call(this, {
                        Position: this.Position,
                        Direction: this.Direction
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
                    if (obj['Symbol'] !== Ray.name) {
                        throw new TypeError('Unrecognized type');
                    }
                    let position = Vector3.Deserialize(obj.Position);
                    let direction = Vector3.Deserialize(obj.Direction);
                    return new Ray(position, direction);
                })
        ).call(this, ...args);
    }
}

export default Ray;