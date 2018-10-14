import Object from '../Core/Object.js';
import Vector3 from './Vector3.js';
import ContainmentType from './ContainmentType.js';
import BoundingBox from './BoundingBox.js';
import BoundingFrustum from './BoundingFrustum.js';
import Matrix from './Matrix.js';

/**
 * 定义一个球体。
 * @public
 * @class
 * @extends Object
 */
class BoundingSphere extends Object {
    /**
     * 新建 BoundingSphere 实例。
     * @constructs
     * @returns {BoundingSphere}
     */
    constructor(): BoundingSphere

    /**
     * 新建 BoundingSphere 实例。
     * @constructs
     * @param {Vector3} center 创建球形点。
     * @param {Number} radius 球形半径。
     * @returns {BoundingBox}
     */
    constructor(center: Vector3, radius: Number): BoundingSphere

    /**
     * 获取球体的中心点。
     * @returns {Vector3}
     */
    get Center(): Vector3

    /**
     * 设置球体的中心点。
     * @param {Vector3} value 值。
     */
    set Center(value: Vector3): null

    /**
     * 获取球形半径。
     * @returns {Number}
     */
    get Radius(): Number

    /**
     * 设置球形半径。
     * @param {Number} value 值。
     */
    set Radius(value: Number): null

    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingSphere。
     * @param {BoundingSphere} sphere 根据当前 BoundingSphere 检查的 BoundingSphere。
     * @returns {ContainmentType}
     */
    Contains(sphere: BoundingSphere): ContainmentType

    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingFrustum。
     * @param {BoundingFrustum} frustum 根据当前 BoundingSphere 检查的 BoundingFrustum。
     * @returns {ContainmentType}
     */
    Contains(frustum: BoundingFrustum): ContainmentType

    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingBox。
     * @param {BoundingBox} box 根据当前 BoundingSphere 检查的 BoundingBox。
     * @returns {ContainmentType}
     */
    Contains(box: BoundingBox): ContainmentType

    /**
     * 检查当前 BoundingSphere 中是否包含指定的点。
     * @param {Vector3} point 根据当前 BoundingSphere 检查的点。
     * @returns {ContainmentType}
     */
    Contains(point: Vector3): ContainmentType

    /**
     * 创建可包含一个指定 BoundingBox 的最小 BoundingSphere。
     * @static
     * @param {BoundingBox} box 用于创建 BoundingSphere 的 BoundingBox。
     * @returns {BoundingSphere}
     */
    static CreateFromBoundingBox(box: BoundingBox): BoundingSphere

    /**
     * 创建可包含一个指定 BoundingFrustum 的最小 BoundingSphere。
     * @static
     * @param {BoundingFrustum} frustum 用于创建 BoundingSphere 的 BoundingFrustum。
     * @returns {BoundingSphere}
     */
    static CreateFromFrustum(frustum: BoundingFrustum): BoundingSphere

    /**
     * 创建一个可包含指定的点列表的 BoundingSphere。
     * @param {TypeList<Vector3>} points BoundingSphere 必须包含的点的列表。
     * @returns {BoundingSphere}
     */
    static CreateFromPoints(points: TypeList<Vector3>): BoundingSphere
 
    /**
     * 创建包含两个指定 BoundingSphere 实例的 BoundingSphere。
     * @static
     * @param {BoundingSphere} original 要合并的 BoundingSphere。
     * @param {BoundingSphere} additional 要合并的 BoundingSphere。
     * @returns {BoundingSphere}
     */
    static CreateMerged(original: BoundingSphere, additional: BoundingSphere): BoundingBox

    /**
     * 确定指定的 BoundingSphere 是否等于当前 BoundingSphere。
     * @param {BoundingSphere} other 用于与当前 BoundingSphere 比较的 BoundingSphere。
     * @returns {Boolean}
     */
    Equals(other: BoundingSphere): Boolean

    /**
     * 获取当前实例的类型。
     * @returns {BoundingBox}
     */
    GetType(): BoundingBox

    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 检查与当前 BoundingSphere 之间交集的 BoundingSphere。
     * @returns {Boolean}
     */
    Intersects(sphere: BoundingSphere): Boolean

    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 检查与当前 BoundingFrustum 之间交集的 BoundingFrustum。
     * @returns {Boolean}
     */
    Intersects(frustum: BoundingFrustum): Boolean

    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingBox 相交。
     * @param {BoundingBox} box 要检查与当前 BoundingBox 是否相交的 BoundingSphere。
     * @returns {Boolean}
     */
    Intersects(box: BoundingBox): Boolean

    /**
     * 检查当前 BoundingSphere 是否与指定的 Ray 相交。
     * @param {Ray} ray 要检查与当前 Ray 是否相交的 BoundingSphere。
     * @returns {?Number}
     */
    Intersects(ray: Ray): ?Number

    /**
     * 检查当前 BoundingSphere 是否与指定的 Plane 相交。
     * @param {Plane} plane 检索与当前 BoundingSphere 之间交集的 Plane。
     * @returns {PlaneIntersectionType}
     */
    Intersects(plane: Plane): PlaneIntersectionType

    /**
     * 使用给定 Matrix 平移和缩放 BoundingSphere。
     * @param {Matrix} matrix 可能包含平移、旋转或统一缩放的变换矩阵。请注意，如果在此变换矩阵中存在非统一缩放、修剪或其他异常变换，BoundingSphere.Transform 将不会返回正确的结果。导致此情况的原因是无法对球体进行修剪或非统一缩放。这种操作可导致球体丢失其形状。
     * @returns {BoundingSphere}
     */
    Transform(matrix: Matrix): BoundingSphere
}

export default BoundingSphere;