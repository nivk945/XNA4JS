import Enum from "../Core/Enum.js";

/**
 * 介绍平面和边界体间的交集。
 * @public
 * @enum
 * @extends Enum
 */
class PlaneIntersectionType extends Enum {
    /**
     * 无交集，边界体位于 Plane 的正半空间。
     * @returns {PlaneIntersectionType}
     */
    static get Front(): PlaneIntersectionType

    /**
     * 无交集，边界体位于 Plane 的负半空间。
     * @returns {PlaneIntersectionType}
     */
    static get Back(): PlaneIntersectionType

    /**
     * 与 Plane 相交。
     * @returns {PlaneIntersectionType}
     */
    static get Intersecting(): PlaneIntersectionType

    /**
     * 获取当前实例的类型。
     * @returns {PlaneIntersectionType}
     */
    GetType(): PlaneIntersectionType
}

export default PlaneIntersectionType;