import Object from '../Core/Object.js';
import Vector3 from './Vector3.js';
import Matrix from './Matrix.js';

/**
 * 定义一个四维矢量 (x,y,z,w)，它可用于有效地将某个对象围绕 (x, y, z) 矢量旋转 angle theta，其中 w = cos(theta/2)。
 * @public
 * @class
 * @extends Object
 */
class Quaternion extends Object {
    /**
    * 初始化新的 Quaternion 实例。
    * @constructs
    * @returns {Quaternion}
    */
    constructor(): Quaternion

    /**
     * [非XNA4.0标准]初始化新的 Quaternion 实例。
     * @constructs
     * @param {Number} value 四元数的x、y、z和w值。
     * @returns {Quaternion}
     */
    constructor(value: Number): Quaternion

    /**
     * 初始化新的 Quaternion 实例。
     * @constructs
     * @param {Number} x 四元数的 x 值。
     * @param {Number} y 四元数的 y 值。
     * @param {Number} z 四元数的 z 值。
     * @param {Number} w 四元数的 w 值。
     * @returns {Quaternion}
     */
    constructor(x: Number, y: Number, z: Number, w: Number): Quaternion

    /**
     * 初始化新的 Quaternion 实例。
     * @constructs
     * @param {Vector3} value 四元数的矢量组件。
     * @param {Number} w 四元数的旋转组件。
     * @returns {Quaternion}
     */
    constructor(value: Vector3, w: Number): Quaternion

    /**
     * 获取指定四元数矢量色差的 x 值。
     * @returns {Number}
     */
    get X(): Number

    /**
     * 设置指定四元数矢量色差的 x 值。
     * @param {Number} value 值。
     */
    set X(value: Number): void

    /**
     * 获取指定四元数矢量色差的 y 值。
     * @returns {Number}
     */
    get Y(): Number

    /**
     * 设置指定四元数矢量色差的 y 值。
     * @param {Number} value 值。
     */
    set Y(value: Number): void

    /**
     * 获取指定四元数矢量色差的 z 值。
     * @returns {Number}
     */
    get Z(): Number

    /**
     * 设置指定四元数矢量色差的 z 值。
     * @param {Number} value 值。
     */
    set Z(value: Number): void

    /**
     * 获取指定四元数矢量色差的 w 值。
     * @returns {Number}
     */
    get W(): Number

    /**
     * 设置指定四元数矢量色差的 w 值。
     * @param {Number} value 值。
     */
    set W(value: Number): void

    /**
     * 返回呈现无旋转的 Quaternion。
     * @static
     * @returns {Quaternion}
     */
    static get Identity(): Quaternion

    /**
     * 将两个四元数相加。
     * @static
     * @param {Quaternion} quaternion1 要添加的 Quaternion。
     * @param {Quaternion} quaternion2 要添加的 Quaternion。
     * @returns {Quaternion}
     */
    static Add(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion

    /**
     * 连接两个 Quaternion；结果中先后呈现了 value1 旋转和 value2 旋转。
     * @static
     * @param {Quaternion} value1 序列中的第一个 Quaternion 旋转。
     * @param {Quaternion} value2 序列中的第二个 Quaternion 旋转。
     * @returns {Quaternion}
     */
    static Concatenate(value1: Quaternion, value2: Quaternion): Quaternion

    /**
     * 返回指定 Quaternion 的共轭。
     * @static
     * @param {Quaternion} value 返回其共轭的 Quaternion。
     * @return {Quaternion}
     */
    static Conjugate(value: Quaternion): Quaternion

    /**
     * 将该 Quaternion 变换为其共轭。
     */
    Conjugate()

    /**
     * 用矢量和绕其旋转的角度创建 Quaternion。
     * @static
     * @param {Vector3} axis 要围绕旋转的矢量。
     * @param {Number} angle 绕矢量旋转的角度。
     * @returns {Quaternion}
     */
    static CreateFromAxisAngle(axis: Vector3, angle: Number): Quaternion

    /**
     * 从旋转 Matrix 创建一个 Quaternion。
     * @static
     * @param {Matrix} matrix 用于创建 Quaternion 的旋转 Matrix。
     * @returns {Quaternion}
     */
    static CreateFromRotationMatrix(matrix: Matrix): Quaternion

    /**
     * 用指定的偏转、俯仰和侧滚角度新建 Quaternion。
     * @static
     * @param {Number} yaw 绕 y 轴的偏转角度，以弧度计。
     * @param {Number} pitch 绕 x 轴的俯仰角度，以弧度计。
     * @param {Number} roll 绕 z 轴的侧滚角度，以弧度计。
     * @returns {Quaternion}
     */
    static CreateFromYawPitchRoll(yaw: Number, pitch: Number, roll: Number): Quaternion

    /**
     * 用一个 Quaternion 除以另一个 Quaternion。
     * @static
     * @param {Quaternion} quaternion1 源 Quaternion。
     * @param {Quaternion} quaternion2 除数。
     * @returns {Quaternion}
     */
    static Divide(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion

    /**
     * 计算两个四元数的点积。
     * @static
     * @param {Quaternion} quaternion1 源 Quaternion。
     * @param {Quaternion} quaternion2 源 Quaternion。
     * @returns {Number}
     */
    static Dot(quaternion1: Quaternion, quaternion2: Quaternion): Number

    /**
     * 确定指定的 Object 是否等于 Quaternion。
     * @param {Quaternion} other 用于与当前 Quaternion 比较的 Quaternion。
     * @returns {Boolean}
     */
    Equals(other: Quaternion): Boolean

    /**
     * 返回 Quaternion 的逆四元数。
     * @static
     * @param {Quaternion} quaternion 源 Quaternion。
     * @returns {Quaternion}
     */
    static Inverse(quaternion: Quaternion): Quaternion

    /**
     * 计算四元数的长度。
     * @returns {Number}
     */
    Length(): Number

    /**
     * 计算四元数的平方长度。
     * @returns {Number}
     */
    LengthSquared(): Number

    /**
     * 在两个四元数之间执行线性插值。
     * @static
     * @param {Quaternion} quaternion1 源四元数。
     * @param {Quaternion} quaternion2 源四元数。
     * @param {Number} amount 指示四元数之间的插值距离的值。
     * @returns {Quaternion}
     */
    static Lerp(quaternion1: Quaternion, quaternion2: Quaternion, amount: Number): Quaternion

    /**
     * 将一个四元数乘以一个标量值。
     * @static
     * @param {Quaternion} quaternion1 源四元数。
     * @param {Number} scaleFactor 标量值。
     * @returns {Quaternion}
     */
    static Multiply(quaternion1: Quaternion, scaleFactor: Number): Quaternion

    /**
     * 将两个四元数相乘。
     * @static
     * @param {Quaternion} quaternion1 乘号左边的四元数。
     * @param {Quaternion} quaternion2 乘号右边的四元数。
     * @returns {Quaternion}
     */
    static Multiply(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion

    /**
     * 对四元数每个组件的符号取反。
     * @static
     * @param {Quaternion} quaternion 源四元数。
     * @returns {Quaternion}
     */
    static Negate(quaternion: Quaternion): Quaternion

    /**
     * 以四元数的长度除四元数的每个组件。
     * @static
     * @param {Quaternion} quaternion 源四元数。
     * @returns {Quaternion}
     */
    static Normalize(quaternion: Quaternion): Quaternion

    /**
     * 以四元数的长度除四元数的每个组件。
     */
    Normalize(): void

    /**
     * 使用球面线性插值计算两个四元数之间的插值。
     * @static
     * @param {Quaternion} quaternion1 源四元数。
     * @param {Quaternion} quaternion2 源四元数。
     * @param {Number} amount 指示要在四元数之间插入多远距离的值。
     * @returns {Quaternion}
     */
    static Slerp(quaternion1: Quaternion, quaternion2: Quaternion, amount: Number): Quaternion

    /**
     * 将一个四元数减去另一个四元数。
     * @static
     * @param {Quaternion} quaternion1 源四元数。
     * @param {Quaternion} quaternion2 源四元数。
     * @returns {Quaternion}
     */
    static Subtract(quaternion1: Quaternion, quaternion2: Quaternion): Quaternion

    /**
     * 获取当前实例的类型。
     * @returns {Quaternion}
     */
    GetType(): Quaternion
}

export default Quaternion;