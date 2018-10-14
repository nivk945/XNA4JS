import Object from '../Core/Object.js';
import Point from './Point.js';

/**
 * 定义一个矩形。
 * @public
 * @class
 * @extends Object
 */
class Rectangle extends Object {
    /**
     * 初始化新的 Rectangle 实例。
     * @constructs
     * @returns {Rectangle}
     */
    constructor(): Rectangle

    /**
     * 初始化新的 Rectangle 实例。
     * @constructs
     * @param {Number} x 矩形的 x 方向坐标。
     * @param {Number} y 矩形的 y 方向坐标。
     * @param {Number} width 矩形宽度。
     * @param {Number} height 矩形高度。
     * @returns {Rectangle}
     */
    constructor(x: Number, y: Number, width: Number, height: Number): Rectangle

    /**
     * 获取指定矩形的 x 方向坐标。
     * @returns {Number}
     */
    get X(): Number

    /**
     * 设置指定矩形的 x 方向坐标。
     * @param {Number} value 值。
     */
    set X(value: Number): null

    /**
     * 获取指定矩形的 y 方向坐标。
     * @returns {Number}
     */
    get Y(): Number

    /**
     * 设置指定矩形的 y 方向坐标。
     * @param {Number} value 值。
     */
    set Y(value: Number): null

    /**
     * 获取指定矩形的宽度。
     * @returns {Number}
     */
    get Width(): Number

    /**
     * 设置指定矩形的宽度。
     * @param {Number} value 值。
     */
    set Width(value: Number): null

    /**
     * 获取指定矩形的高度。
     * @returns {Number}
     */
    get Height(): Number

    /**
     * 设置指定矩形的高度。
     * @param {Number} value 值。
     */
    set Height(value: Number): null

    /**
     * 获取 Rectangle 的左上角值。
     * @returns {Point}
     */
    get Location(): Point

    /**
     * 设置 Rectangle 的左上角值。
     * @param {Point} value 值。
     */
    set Location(value: Point)

    /**
     * 返回矩形底部的 y 方向坐标。
     * @returns {Number}
     */
    get Bottom(): Number

    /**
     * 获取指定矩形中心的 Point。
     * @returns {Point}
     */
    get Center(): Point

    /**
     * 返回所有值均设置为零的 Rectangle。
     * @static
     * @returns {Rectangle}
     */
    static get Empty(): Rectangle

    /**
     * 获取一个指示 Rectangle 是否为空的值。
     * @returns {Boolean}
     */
    get IsEmpty(): Boolean

    /**
     * 返回矩形左边的 x 方向坐标。
     * @returns {Number}
     */
    get Left(): Number

    /**
     * 返回矩形右侧的 x 方向坐标。
     * @returns {Number}
     */
    get Right(): Number

    /**
     * 返回矩形顶部的 y 方向坐标。
     * @returns {Number}
     */
    get Top(): Number

    /**
     * [非XNA4.0标准]确定该 Rectangle 条目中是否包含指定的 x 和 y 坐标。
     * @param {Number} x 要求值的 x 坐标。
     * @param {Number} y 要求值的 y 坐标。
     * @returns {Boolean}
     */
    Contains(x: Number, y: Number): Boolean

    /**
     * [非XNA4.0标准]确定该 Rectangle 条目中是否包含指定的 Point。
     * @param {Point} value 要求值的 Point。
     * @returns {Boolean}
     */
    Contains(value: Point): Boolean

    /**
     * 确定该 Rectangle 条目中是否包含指定的 Rectangle。
     * @param {Rectangle} value 要求值的 Rectangle。
     * @returns {Boolean}
     */
    Contains(value: Rectangle): Boolean

    /**
     * 确定指定的 Object 是否等于 Rectangle。
     * @param {Rectangle} other 用于与当前 Rectangle 比较的 Object。
     * @returns {Boolean}
     */
    Equals(other: Rectangle): Boolean

    /**
     * 获取当前实例的类型。
     * @returns {Rectangle}
     */
    GetType(): Rectangle

    /**
     * 按指定的垂直和水平值向外推动 Rectangle 的边缘。
     * @param {Number} horizontalAmount 向外推动边缘的值。
     * @param {Number} verticalAmount 向外推动顶部和底部的值。
     */
    Inflate(horizontalAmount: Number, verticalAmount: Number): null

    /**
     * 创建一个 Rectangle，用于定义一个矩形与另一个矩形重叠的区域。
     * @static
     * @param {Rectangle} value1 要比较的第一个 Rectangle。
     * @param {Rectangle} value2 要比较的第二个 Rectangle。
     * @returns {Rectangle}
     */
    static Intersect(value1: Rectangle, value2: Rectangle): Rectangle

    /**
     * 确定指定的 Rectangle 是否与该 Rectangle 相交。
     * @param {Rectangle} value 要求值的 Rectangle。
     * @returns {Boolean}
     */
    Intersects(value: Rectangle): Boolean

    /**
     * 更改 Rectangle 的位置。
     * @param {Number} offsetX 更改 x 位置。
     * @param {Number} offsetY 更改 y 位置。
     */
    Offset(offsetX: Number, offsetY: Number)

    /**
     * 更改 Rectangle 的位置。
     * @param {Point} amount 要调整 Rectangle 位置的值。
     */
    Offset(amount: Point)

    /**
     * 创建一个完全包含两个其他矩形的新 Rectangle。
     * @static
     * @param {Rectangle} value1 要包含的第一个 Rectangle。
     * @param {Rectangle} value2 要包含的第二个 Rectangle。
     * @returns {Rectangle}
     */
    static Union(value1: Rectangle, value2: Rectangle): Rectangle
}

export default Rectangle;