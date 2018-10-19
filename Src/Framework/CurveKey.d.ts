import Object from '../Core/Object.js';
import CurveContinuity from './CurveContinuity.js';

/**
 * 在多点曲线中呈现一个点。
 * @public
 * @class
 * @extends Object
 */
class CurveKey extends Object {
    /**
     * [非XNA4.0标准]初始化新的 CurveKey 实例。
     * @constructs
     * @returns {CurveKey}
     */
    constructor(): CurveKey

    /**
     * 初始化新的 CurveKey 实例。
     * @constructs
     * @param {Number} position 曲线上的位置。
     * @param {Number} value 控制点的值。
     * @returns {CurveKey}
     */
    constructor(position: Number, value: Number): CurveKey

    /**
     * 初始化新的 CurveKey 实例。
     * @constructs
     * @param {Number} position 曲线上的位置。
     * @param {Number} value 控制点的值。
     * @param {Number} tangentIn 从曲线的先前点起始的切线切入点。
     * @param {Number} tangentOut 指向曲线的下一个点的切线切出点。
     * @returns {CurveKey}
     */
    constructor(position: Number, value: Number, tangentIn: Number, tangentOut: Number): CurveKey

    /**
     * 初始化新的 CurveKey 实例。
     * @constructs
     * @param {Number} position 曲线上的位置。
     * @param {Number} value 控制点的值。
     * @param {Number} tangentIn 从曲线的先前点起始的切线切入点。
     * @param {Number} tangentOut 指向曲线的下一个点的切线切出点。
     * @param {CurveContinuity} continuity 表示曲线为离散或连续曲线的枚举。
     * @returns {CurveKey}
     */
    constructor(position: Number, value: Number, tangentIn: Number, tangentOut: Number, continuity: CurveContinuity): CurveKey

    /**
     * CurveKey 在曲线中的位置。
     * @returns {Number}
     */
    get Position(): Number

    /**
     * 获取描述曲线上的该点和下一点之间的线段是离散还是连续。
     * @returns {CurveContinuity}
     */
    get Continuity(): CurveContinuity

    /**
     * 设置描述曲线上的该点和下一点之间的线段是离散还是连续。
     * @param {CurveLoopType} value 值。
     */
    set Continuity(value: CurveContinuity): void

    /**
     * 获取描述该点的值。
     * @returns {Number}
     */
    get Value(): Number

    /**
     * 设置描述该点的值。
     * @param {Number} value 值。
     */
    set Value(value: Number): void

    /**
     * 获取介绍曲线中的先前点接近该点时的切线。
     * @returns {Number}
     */
    get TangentIn(): Number

    /**
     * 设置介绍曲线中的先前点接近该点时的切线。
     * @param {Number} value 值。
     */
    set TangentIn(value: Number): void

    /**
     * 获取介绍曲线中离开该点向下一点靠近时的切线。
     * @returns {Number}
     */
    get TangentOut(): Number

    /**
     * 设置介绍曲线中离开该点向下一点靠近时的切线。
     * @param {Number} value 值。
     */
    set TangentOut(value: Number): void

    /**
     * 创建 CurveKey 的副本。
     * @returns {CurveKey}
     */
    Clone(): CurveKey

    /**
     * 将该实例与其他 CurveKey 比较，并返回其相对值指示。
     * @param {CurveKey} other 要比较的 CurveKey。
     * @returns {Number}
     */
    CompareTo(other: CurveKey): Number

    /**
     * 确定指定的 Object 是否等于 CurveKey。
     * @param {CurveKey} other 用于与当前 CurveKey 比较的 Object。
     * @returns {Boolean}
     */
    Equals(other: CurveKey): Boolean

    /**
     * 获取当前实例的类型。
     * @returns {CurveKey}
     */
    GetType(): CurveKey
}

export default CurveKey;