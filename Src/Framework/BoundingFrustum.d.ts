import Object from '../Core/Object.js';
import Vector3 from './Vector3.js';
import ContainmentType from './ContainmentType.js';
import BoundingBox from './BoundingBox.js';
import BoundingFrustum from './BoundingFrustum.js';
import Matrix from './Matrix.js';
import Plane from './BoundingBox.js';

/**
 * 定义视锥并帮助确定图形是否与之相交。
 * @public
 * @class
 * @extends Object
 */
class BoundingFrustum extends Object {
    /**
     * 新建 BoundingFrustum 实例。
     * @constructs
     * @param {Matrix} value 通常用于查看 × 投影矩阵的组合矩阵。
     * @returns {BoundingFrustum}
     */
    constructor(value: Matrix): BoundingFrustum

    /**
     * 获取描述此边界视锥的 Matrix。
     * @returns {Matrix}
     */
    get Matrix(): Matrix

    /**
     * 设置描述此边界视锥的 Matrix。
     * @param {Matrix} value 值。
     */
    set Matrix(value: Matrix): void

    /**
     * [非XNA4.0标准]指定 BoundingFrustum 中的 Plane 总数 (6)。
     * @static
     * @returns {Number}
     */
    static PlaneCount(): Number

    /**
     * 指定 BoundingFrustum 中的角点总数 (8)。
     * @static
     * @returns {Number}
     */
    static CornerCount: Number

    /**
     * 获取 BoundingFrustum 的近处平面。
     * @returns {Plane}
     */
    get Near(): Plane

    /**
     * 获取 BoundingFrustum 的远处平面。
     * @returns {Plane}
     */
    get Far(): Plane

    /**
     * 获取 BoundingFrustum 的左平面。
     * @returns {Plane}
     */
    get Left(): Plane

    /**
     * 获取 BoundingFrustum 的右平面。
     * @returns {Plane}
     */
    get Right(): Plane

    /**
     * 获取 BoundingFrustum 的顶部平面。
     * @returns {Plane}
     */
    get Top(): Plane

    /**
     * 获取 BoundingFrustum 的底部平面。
     * @returns {Plane}
     */
    get Bottom(): Plane

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingSphere。
     * @param {BoundingSphere} sphere 根据当前 BoundingFrustum 检查的 BoundingSphere。
     * @returns {ContainmentType}
     */
    Contains(sphere: BoundingSphere): ContainmentType

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingFrustum。
     * @param {BoundingFrustum} frustum 根据当前 BoundingFrustum 检查的 BoundingFrustum。
     * @returns {ContainmentType}
     */
    Contains(frustum: BoundingFrustum): ContainmentType

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingBox。
     * @param {BoundingBox} box 根据当前 BoundingFrustum 检查的 BoundingBox。
     * @returns {ContainmentType}
     */
    Contains(box: BoundingBox): ContainmentType

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的点。
     * @param {Vector3} point 根据当前 BoundingFrustum 检查的点。
     * @returns {ContainmentType}
     */
    Contains(point: Vector3): ContainmentType

    /**
     * 确定指定的 BoundingFrustum 是否等于当前 BoundingFrustum。
     * @param {BoundingFrustum} other 用于与当前 BoundingFrustum 比较的 BoundingFrustum。
     * @returns {Boolean}
     */
    Equals(other: BoundingFrustum): Boolean

    /**
     * 获取组成 BoundingFrustum 角点的数据点数组。
     * @returns {Array<Vector3>}
     */
    GetCorners(): Array<Vector3>

    /**
     * 获取组成 BoundingFrustum 角点的数据点数组。
     * @param {Array<Vector3>} corners 至少具备 8 个 Vector3 数据点的现有数组，此数组可以用来写入 BoundingFrustum 角点。
     */
    GetCorners(corners: Array<Vector3>): void
    
    /**
     * 获取当前实例的类型。
     * @returns {BoundingFrustum}
     */
    GetType(): BoundingFrustum

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 用于相交检查的 BoundingSphere。
     * @returns {Boolean}
     */
    Intersects(sphere: BoundingSphere): Boolean

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 用于相交检查的 BoundingFrustum。
     * @returns {Boolean}
     */
    Intersects(frustum: BoundingFrustum): Boolean

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingBox 相交。
     * @param {BoundingBox} box 用于相交检查的 BoundingBox。
     * @returns {Boolean}
     */
    Intersects(box: BoundingBox): Boolean

    /**
     * 检查当前 BoundingFrustum 是否与指定的 Ray 相交。
     * @param {Ray} ray 用于相交检查的 Ray。
     * @returns {?Number}
     */
    Intersects(ray: Ray): ?Number

    /**
     * 检查当前 BoundingFrustum 是否与指定的 Plane 相交。
     * @param {Plane} plane 用于相交检查的 Plane。
     * @returns {PlaneIntersectionType}
     */
    Intersects(plane: Plane): PlaneIntersectionType
}

export default BoundingFrustum;