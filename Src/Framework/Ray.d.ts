import Object from '../Core/Object.js';
import Ray from './Ray.js';
import Vector3 from './Vector3.js';
import Vector3 from './Vector3.js';
import BoundingSphere from './BoundingSphere.js';
import ContainmentType from './ContainmentType.js';
import BoundingFrustum from './BoundingFrustum.js';
import BoundingBox from './BoundingBox.js';
import Plane from './Plane.js';

/**
 * 定义一条射线。
 * @public
 * @class
 * @extends Object
 */
class Ray extends Object {
    /**
     * 新建 Ray 实例。
     * @constructs
     * @returns {Ray}
     */
    constructor(): Ray

    /**
     * 新建 Ray 实例。
     * @constructs
     * @param {Vector3} position Ray 的起始点。
     * @param {Vector3} direction 描述 Ray 方向的单位矢量。
     * @returns {Ray}
     */
    constructor(position: Vector3, direction: Vector3): Ray

    /**
     * 获取指定 Ray 所指方向的单位矢量。
     * @returns {Vector3}
     */
    get Direction(): Vector3

    /**
     * 设置指定 Ray 所指方向的单位矢量。
     * @param {Vector3} value 值。
     */
    set Direction(value: Vector3): null

    /**
     * 获取指定 Ray 的起点。
     * @returns {Vector3}
     */
    get Position(): Vector3

    /**
     * 设置指定 Ray 的起点。
     * @param {Vector3} value 值。
     */
    set Position(value: Vector3): null

    /**
     * 确定指定的 Ray 是否等于当前 Ray。
     * @param {Ray} other 用于与当前 Ray 比较的 Ray。
     * @returns {Boolean}
     */
    Equals(other: Ray): Boolean

    /**
     * 检查 Ray 是否与指定的 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 检查与 Ray 的相交性的 BoundingSphere。
     * @returns {?Number}
     */
    Intersects(sphere: BoundingSphere): ?Number

    /**
     * 检查 Ray 是否与指定的 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 检查与 Ray 之间交集的 BoundingFrustum。
     * @returns {?Number} 
     */
    Intersects(frustum: BoundingFrustum): ?Number

    /**
     * 检查 Ray 是否与指定的 BoundingBox 相交。
     * @param {BoundingBox} box 要检查与 Ray 是否相交的 BoundingBox。
     * @returns {?Number} 
     */
    Intersects(box: BoundingBox): ?Number

    /**
     * 确定该 Ray 是否与指定的 Plane 相交。
     * @param {Plane} plane 用于计算与该 Ray 交集的 Plane。
     * @returns {?Number}
     */
    Intersects(plane: Plane): ?Number

    /**
     * 获取当前实例的类型。
     * @returns {Ray}
     */
    GetType(): Ray
}

export default Ray;