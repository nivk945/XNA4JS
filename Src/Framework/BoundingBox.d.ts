import Object from '../Core/Object.js';
import Vector3 from './Vector3.js';
import ContainmentType from './ContainmentType.js';
import BoundingSphere from './BoundingSphere.js';
import Plane from './Plane.js';
import PlaneIntersectionType from './PlaneIntersectionType.js';
import TypeList from '../Core/TypeList.js';

/**
 * 定义通过轴对齐的盒形 3D 物体。
 * @public
 * @class
 * @extends Object
 */
class BoundingBox extends Object {
    /**
     * 创建 BoundingBox 的实例。
     * @constructs
     * @returns {BoundingBox}
     */
    constructor(): BoundingBox

    /**
     * 创建 BoundingBox 的实例。
     * @constructs
     * @param {Vector3} min 包含的最少点。
     * @param {Vector3} max 包含的最多点。
     * @returns {BoundingBox}
     */
    constructor(min: Vector3, max: Vector3): BoundingBox

    /**
     * 获取 BoundingBox 包含的最少点。
     * @returns {Vector3}
     */
    get Min(): Vector3

    /**
     * 设置 BoundingBox 包含的最少点。
     * @param {Vector3} value 值。
     */
    set Min(value: Vector3): null

    /**
     * 获取 BoundingBox 包含的最多点。
     * @returns {Vector3}
     */
    get Max(): Vector3

    /**
     * 设置 BoundingBox 包含的最多点。
     * @param {Vector3} value 值。
     */
    set Max(value: Vector3): null

    /**
     * 指定 BoundingBox 中的角点总数 (8)。
     * @static
     * @returns {Number}
     */
    static get CornerCount(): Number

    /**
     * 测试 BoundingBox 中是否包含其他 BoundingBox。
     * @param {BoundingBox} box 用于重叠测试的 BoundingBox。
     * @returns {ContainmentType}
     */
    Contains(box: BoundingBox): ContainmentType

    /**
     * 测试 BoundingBox 中是否包含 BoundingSphere。
     * @param {BoundingSphere} sphere 用于重叠测试的 BoundingSphere。
     * @returns {ContainmentType}
     */
    Contains(sphere: BoundingSphere): ContainmentType

    /**
     * 测试 BoundingBox 中是否包含 BoundingFrustum。
     * @param {BoundingFrustum} frustum 用于重叠测试的 BoundingFrustum。
     * @returns {ContainmentType}
     */
    Contains(frustum: BoundingFrustum): ContainmentType

    /**
     * 测试 BoundingBox 中是否包含点。
     * @param {Vector3} point 用于重叠测试的点。
     * @returns {ContainmentType}
     */
    Contains(point: Vector3): ContainmentType

    /**
     * 创建包含一个点组的最小 BoundingBox。
     * @static
     * @param {Array<Vector3>} points BoundingBox 应包含的点的列表。
     * @returns {BoundingBox}
     */
    static CreateFromPoints(points: Array<Vector3>): BoundingBox

    /**
     * 创建包含指定 BoundingSphere 的最小 BoundingBox。
     * @static
     * @param {BoundingSphere} sphere 要包含的 BoundingSphere。
     * @returns {BoundingBox}
     */
    static CreateFromSphere(sphere: BoundingSphere): BoundingBox

    /**
     * 创建包含两个指定 BoundingBox 实例的最小 BoundingBox。
     * @static
     * @param {BoundingBox} original 要包含的一个 BoundingBox。
     * @param {BoundingBox} additional 要包含的一个 BoundingBox。
     * @returns {BoundingBox}
     */
    static CreateMerged(original: BoundingBox, additional: BoundingBox): BoundingBox

    /**
     * 确定 BoundingBox 的两个实例是否相等。
     * @param {BoundingBox} other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns {Boolean}
     */
    Equals(other: BoundingBox): Boolean

    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @returns {TypeList<Vector3>}
     */
    GetCorners(): TypeList<Vector3>

    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @param {TypeList<Vector3>} corners 至少具备 8 个 Vector3 数据点的现有数组，此数组可以用来写入 BoundingBox 角点。
     */
    GetCorners(corners: TypeList<Vector3>): null
    
    /**
     * 获取当前实例的类型。
     * @returns {BoundingBox}
     */
    GetType(): BoundingBox

    /**
     * 检查当前 BoundingBox 是否与其他 BoundingBox 相交
     * @param {BoundingBox} box 用于相交检查的 BoundingBox。
     * @returns {Boolean}
     */
    Intersects(box: BoundingBox): Boolean

    /**
     * 检查当前 BoundingBox 是否与某个 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 用于相交检查的 BoundingSphere。
     * @returns {Boolean}
     */
    Intersects(sphere: BoundingSphere): Boolean

    /**
     * 检查当前 BoundingBox 是否与某个 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 用于相交检查的 BoundingFrustum。
     * @returns {Boolean}
     */
    Intersects(frustum: BoundingFrustum): Boolean

    /**
     * 检查当前 BoundingBox 是否与某个 Ray 相交。
     * @param {Ray} ray 用于相交检查的 Ray。
     * @returns {?Number}
     */
    Intersects(ray: Ray): ?Number

    /**
     * 检查当前 BoundingBox 是否与某个 Plane 相交。
     * @param {Plane} plane 用于相交检查的 Plane。
     * @returns {PlaneIntersectionType}
     */
    Intersects(plane: Plane): PlaneIntersectionType
}

export default BoundingBox;