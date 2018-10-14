import Object from '../Core/Object.js';
import MathHelper from './MathHelper.js';
import Vector3 from './Vector3.js';
import Vector2 from './Vector2.js';

/**
 * 定义具有四个组件的矢量。
 * @public
 * @class
 * @extends Object
 */
class Vector4 extends Object {
    /**
     * 新建 Vector4 实例。
     * @constructs
     * @returns {Vector4}
     */
    constructor(): Vector4

    /**
     * 新建 Vector4 实例。
     * @constructs
     * @param {Number} value 每个色差的初始化值。
     * @returns {Vector4}
     */
    constructor(value: Number): Vector4

    /**
     * 初始化新的 Vector4 实例。
     * @constructs
     * @param {Number} x 矢量 x 色差的初始值。
     * @param {Number} y 矢量 y 色差的初始值。
     * @param {Number} z 矢量 z 色差的初始值。
     * @param {Number} w 矢量 w 色差的初始值。
     * @returns {Vector4}
     */
    constructor(x: Number, y: Number, z: Number, w: Number): Vector4

    /**
     * 初始化新的 Vector4 实例。
     * @constructs
     * @param {Vector2} value 包含 x 和 y 色差的初始化值的矢量。
     * @param {Number} z 矢量 z 色差的初始值。
     * @param {Number} w 矢量 w 色差的初始值。
     * @returns {Vector4}
     */
    constructor(value: Vector2, z: Number, w: Number): Vector4

    /**
     * 初始化新的 Vector4 实例。
     * @constructs
     * @param {Vector3} value 包含 x、y 和 z 色差的初始化值的矢量。
     * @param {Number} w 矢量 w 色差的初始值。
     * @returns {Vector4}
     */
    constructor(value: Vector3, w: Number): Vector4

    /**
     * 获取矢量的 x 色差。
     * @returns {Number}
     */
    get X(): Number

    /**
     * 设置矢量的 x 色差。
     * @param {Number} value 值。
     */
    set X(value: Number): null

    /**
     * 获取矢量的 y 色差。
     * @returns {Number}
     */
    get Y(): Number

    /**
     * 设置矢量的 y 色差。
     * @param {Number} value 值。
     */
    set Y(value: Number): null

    /**
     * 获取矢量的 z 色差。
     * @returns {Number}
     */
    get Z(): Number

    /**
     * 设置矢量的 z 色差。
     * @param {Number} value 值。
     */
    set Z(value: Number): null

    /**
     * 获取矢量的 w 色差。
     * @returns {Number}
     */
    get W(): Number

    /**
     * 设置矢量的 w 色差。
     * @param {Number} value 值。
     */
    set W(value: Number): null

    /**
     * 返回所有组件均设置为一的 Vector4。
     * @static
     * @returns {Vector4}
     */
    static get One(): Vector4

    /**
     * 返回 Vector4 (1, 0, 0, 0)。
     * @static
     * @returns {Vector4}
     */
    static get UnitX(): Vector4

    /**
     * 返回 Vector4 (0, 1, 0, 0)。
     * @static
     * @returns {Vector4}
     */
    static get UnitY(): Vector4

    /**
     * 返回 Vector4 (0, 0, 1, 0)。
     * @static
     * @returns {Vector4}
     */
    static get UnitZ(): Vector4

    /**
     * 返回 Vector4 (0, 0, 0, 1)。
     * @static
     * @returns {Vector4}
     */
    static get UnitW(): Vector4

    /**
     * 返回所有组件均设置为零的 Vector4。
     * @static
     * @returns {Vector4}
     */
    static get Zero(): Vector4

    /**
     * 将两个矢量相加。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Vector4}
     */
    static Add(value1: Vector4, value2: Vector4): Vector4

    /**
     * 返回一个相对于 4D 三角形的质心（重心）坐标中某指定点的 4D Cartesian 坐标所在的 Vector4。
     * @static
     * @param {Vector4} value1 包含三角形顶点 1 的 4D Cartesian 坐标的 Vector4。
     * @param {Vector4} value2 包含三角形顶点 2 的 4D Cartesian 坐标的 Vector4。
     * @param {Vector4} value3 包含三角形顶点 3 的 4D Cartesian 坐标的 Vector4。
     * @param {Number} amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param {Number} amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @returns {Vector4}
     */
    static Barycentric(value1: Vector4, value2: Vector4, value3: Vector4, amount1: Number, amount2: Number): Vector4

    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @static
     * @param {Vector4} value1 插值中的第一个位置。
     * @param {Vector4} value2 插值中的第二个位置。
     * @param {Vector4} value3 插值中的第三个位置。
     * @param {Vector4} value4 插值中的第四个位置。
     * @param {Number} amount 权重因子。
     * @returns {Vector4}
     */
    static CatmullRom(value1: Vector4, value2: Vector4, value3: Vector4, value4: Vector4, amount: Number): Vector4

    /**
     * 将值限制在指定范围内。
     * @static
     * @param {Vector4} value1 要限制的值。
     * @param {Vector4} min 最小值。
     * @param {Vector4} max 最大值。
     * @returns {Vector4}
     */
    static Clamp(value1: Vector4, min: Vector4, max: Vector4): Vector4

    /**
     * 计算两个矢量之间的距离。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Number}
     */
    static Distance(value1: Vector4, value2: Vector4): Number

    /**
     * 计算两个平方矢量之间的距离。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Number}
     */
    static DistanceSquared(value1: Vector4, value2: Vector4): Number

    /**
     * 用一个矢量除以一个标量值。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Number} divider 除数。
     * @returns {Vector4}
     */
    static Divide(value1: Vector4, divider: Number): Vector4

    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 除数矢量。
     * @returns {Vector4}
     */
    static Divide(value1: Vector4, value2: Vector4): Vector4

    /**
     * 计算两个矢量的点积。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Number}
     */
    static Dot(value1: Vector4, value2: Vector4): Number

    /**
     * 确定指定的 Object 是否等于 Vector4。
     * @param {Vector4} other 用于与当前 Vector4 比较的 Vector4。
     * @returns {Boolean}
     */
    Equals(other: Vector4): Boolean

    /**
     * 执行 Hermite 样条插值。
     * @static
     * @param {Vector4} value1 源位置矢量。
     * @param {Vector4} tangent1 源切线矢量。
     * @param {Vector4} value2 源位置矢量。
     * @param {Vector4} tangent2 源切线矢量。
     * @param {Number} amount 权重因子。
     * @returns {Vector4}
     */
    static Hermite(value1: Vector4, tangent1: Vector4, value2: Vector4, tangent2: Vector4, amount: Number): Vector4

    /**
     * 计算矢量的长度。
     * @returns {Number}
     */
    Length(): Number

    /**
     * 计算平方矢量的长度。
     * @returns {Number}
     */
    LengthSquared(): Number;

    /**
     * 在两个矢量之间执行线性插值。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @param {Number} amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns {Vector4}
     */
    static Lerp(value1: Vector4, value2: Vector4, amount: Number): Vector4

    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Vector4}
     */
    static Max(value1: Vector4, value2: Vector4): Vector4

    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Vector4}
     */
    static Min(value1: Vector4, value2: Vector4): Vector4

    /**
     * 将一个矢量乘以一个标量。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Number} scaleFactor 标量值。
     * @returns {Vector4}
     */
    static Multiply(value1: Vector4, scaleFactor: Number): Vector4

    /**
     * 将两个矢量的组件彼此相乘。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Vector4}
     */
    static Multiply(value1: Vector4, value2: Vector4): Vector4

    /**
     * 返回指向反方向的矢量。
     * @static
     * @param {Vector4} value 源矢量。
     * @returns {Vector4}
     */
    static Negate(value: Vector4): Vector4

    /**
     * 根据指定的矢量创建单位矢量。
     * @static
     * @param {Vector4} value 源 Vector4。
     * @return {Vector4}
     */
    static Normalize(value: Vector4): Vector4

    /**
     * 将当前矢量转为单位矢量。
     */
    Normalize(): null

    /**
     * 使用三次方程计算两个值之间的插值。
     * @static
     * @param {Vector4} value1 源值。
     * @param {Vector4} value2 源值。
     * @param {Number} amount 权重值。
     * @returns {Vector4}
     */
    static SmoothStep(value1: Vector4, value2: Vector4, amount: Number): Vector4

    /**
     * 将一个矢量减去一个矢量。
     * @static
     * @param {Vector4} value1 源矢量。
     * @param {Vector4} value2 源矢量。
     * @returns {Vector4}
     */
    static Subtract(value1: Vector4, value2: Vector4): Vector4

    /**
     * 获取当前实例的类型。
     * @returns {Vector4}
     */
    GetType(): Vector4

    /**
     * 通过给定 Matrix 将 Vector2 变换为 Vector4。
     * @static
     * @param {Vector2} position 要变换的 Vector2。
     * @param {Matrix} matrix 要应用的 Matrix。
     * @returns {Vector4}
     */
    static Transform(position: Vector2, matrix: Matrix): Vector4

    /**
     * 通过指定 Quaternion 将 Vector2 变换为 Vector4。
     * @static
     * @param {Vector2} value 要变换的 Vector2。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @returns {Vector4}
     */
    static Transform(value: Vector2, rotation: Quaternion): Vector4

    /**
     * 通过给定 Matrix 将 Vector3 变换为 Vector4。
     * @static
     * @param {Vector3} position 要变换的 Vector3。
     * @param {Matrix} matrix 要应用的 Matrix。
     * @returns {Vector4}
     */
    static Transform(position: Vector3, matrix: Matrix): Vector4

    /**
     * 通过指定 Quaternion 将 Vector3 变换为 Vector4。
     * @static
     * @param {Vector3} value 要变换的 Vector3。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @returns {Vector3}
     */
    static Transform(value: Vector3, rotation: Quaternion): Vector3

    /**
     * 通过指定 Matrix 变换 Vector4。
     * @static
     * @param {Vector4} position 要变换的 Vector4。
     * @param {Matrix} matrix 要应用的 Matrix。
     * @returns {Vector4}
     */
    static Transform(position: Vector4, matrix: Matrix): Vector4

    /**
     * 通过指定 Quaternion 变换 Vector4。
     * @static
     * @param {Vector4} value 要变换的 Vector4。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @returns {Vector4}
     */
    static Transform(value: Vector4, rotation: Quaternion): Vector4

    /**
     * 通过指定 Matrix 将 Vector4 数组中的指定范围变换为目标数组的指定范围。
     * @static
     * @param {TypeList<Vector4>} sourceArray 包含要变换的范围的 Vector4 数组。
     * @param {Number} sourceIndex 源数组中要变换的首个 Vector4 的索引。
     * @param {Matrix} matrix 要应用的变换 Matrix。
     * @param {TypeList<Vector4>} destinationArray [out]要将结果写入到的现有 Vector4 目标数组。
     * @param {Number} destinationIndex 目标数组中要写入的首个 Vector4 的索引。
     * @param {Number} length 要变换的 Vector4 数量。
     */
    static Transform(sourceArray: TypeList<Vector4>, sourceIndex: Number, matrix: Matrix, destinationArray: TypeList<Vector4>, destinationIndex: Number, length: Number): null

    /**
     * 通过指定 Quaternion 将 Vector4 数组中的指定范围变换为目标数组的指定范围。
     * @static
     * @param {TypeList<Vector4>} sourceArray 包含要变换的范围的 Vector4 数组。
     * @param {Number} sourceIndex 源数组中要变换的首个 Vector4 的索引。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @param {TypeList<Vector4>} destinationArray [out]要将结果写入到的现有 Vector4 目标数组。
     * @param {Number} destinationIndex 目标数组中要写入的首个 Vector4 的索引。
     * @param {Number} length 要变换的 Vector4 数量。
     */
    static Transform(sourceArray: TypeList<Vector4>, sourceIndex: Number, rotation: Quaternion, destinationArray: TypeList<Vector4>, destinationIndex: Number, length: Number): null

    /**
     * 通过指定 Matrix 变换 Vector4 数组。
     * @static
     * @param {TypeList<Vector4>} sourceArray 要变换的 Vector4 数组。
     * @param {Matrix} matrix 要应用的变换 Matrix。
     * @param {TypeList<Vector4>} destinationArray [out]变换后的 Vector4 被写入的现有目标数组。
     */
    static Transform(sourceArray: TypeList<Vector4>, matrix: Matrix, destinationArray: TypeList<Vector4>): null

    /**
     * 通过指定 Quaternion 变换 Vector4 数组。
     * @static
     * @param {TypeList<Vector4>} sourceArray 要变换的 Vector4 数组。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @param {TypeList<Vector4>} destinationArray [out]变换后的 Vector4 被写入的现有目标数组。
     */
    static Transform(sourceArray: TypeList<Vector4>, rotation: Quaternion, destinationArray: TypeList<Vector4>): null
}

export default Vector4;