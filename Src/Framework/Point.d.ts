import Object from '../Core/Object.js';

/**
 * 定义 2D 空间中的点。
 * @public
 * @class
 * @extends Object
 */
class Point extends Object {
    /**
     * 初始化新的 Point 实例。
     * @constructs
     * @returns {Point}
     */
    constructor(): Point

    /**
     * 初始化新的 Point 实例。
     * @constructs
     * @param {Number} x Point 的 x 方向坐标。
     * @param {Number} y Point 的 y 方向坐标。
     * @returns {Point}
     */
    constructor(x: Number, y: Number): Point

    /**
     * 获取指定 Point 的 x 方向坐标。
     * @returns {Number}
     */
    get X(): Number

    /**
     * 设置指定 Point 的 x 方向坐标。
     * @param {Number} value 值。
     */
    set X(value: Number): void

    /**
     * 获取指定 Point 的 y 方向坐标。
     * @returns {Number}
     */
    get Y(): Number

    /**
     * 设置指定 Point 的 y 方向坐标。
     * @param {Number} value 值。
     */
    set Y(value: Number): void

    /**
     * 返回点 (0,0)。
     * @static
     * @returns {Point}
     */
    static get Zero(): Point

    /**
     * 确定两个 Point 实例是否相等。
     * @param {Point} other 用于与此实例比较的 Point。
     * @returns {Boolean}
     */
    Equals(other: Point): Boolean

    /**
     * 获取当前实例的类型。
     * @returns {Point}
     */
    GetType(): Point
}

export default Point;