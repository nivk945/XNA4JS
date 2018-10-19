import Object from '../Core/Object.js';
import CurveLoopType from './CurveLoopType.js';
import CurveKeyCollection from './CurveKeyCollection.js';
import CurveTangent from './CurveTangent.js';
import CurveContinuity from './CurveContinuity.js';

/**
 * 存储任意 2D CurveKey 点集，并提供相应的方法对其定义的曲线进行功能评估。
 * @public
 * @class
 * @extends Object
 */
class Curve extends Object {
    /**
     * 初始化新的 Curve 实例。
     * @constructs
     * @returns {Curve}
     */
    constructor(): Curve

    /**
     * 获取指定如何处理小于曲线中第一个控制点的权重值。
     * @returns {CurveLoopType}
     */
    get PreLoop(): CurveLoopType

    /**
     * 设置指定如何处理小于曲线中第一个控制点的权重值。
     * @param {CurveLoopType} value 值。
     */
    set PreLoop(value: CurveLoopType): void

    /**
     * 获取指定如何处理大于曲线中最后一个控制点的权重值。
     * @returns {CurveLoopType}
     */
    get PostLoop(): CurveLoopType

    /**
     * 设置指定如何处理大于曲线中最后一个控制点的权重值。
     * @param {CurveLoopType} value 值。
     */
    set PostLoop(value: CurveLoopType): void

    /**
     * 构成曲线的点。
     * @returns {CurveKeyCollection}
     */
    get Keys(): CurveKeyCollection

    /**
     * 获取一个指示曲线是否为常量的值。
     * @returns {Boolean}
     */
    get IsConstant(): Boolean

    /**
     * 创建 Curve 的副本。
     * @return {Curve}
     */
    Clone(): Curve

    /**
     * 为通过索引指定的 CurveKey 计算 TangentIn 和 TangentOut。
     * @param {Number} keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 Keys 集合中）。
     * @param {CurveTangent} tangentType 要计算的切线的类型（CurveTangent 枚举中指定的一个类型）。
     */
    ComputeTangent(keyIndex: Number, tangentType: CurveTangent): void

    /**
     * 为给定的 CurveKey 计算指定类型的 TangentIn 和指定类型的 TangentOut。
     * @param {Number} keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 Keys 集合中）。
     * @param {CurveTangent} tangentInType 要计算的 TangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param {CurveTangent} tangentOutType 要计算的 TangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    ComputeTangent(keyIndex: Number, tangentInType: CurveTangent, tangentOutType: CurveTangent): void

    /**
     * 为 TangentIn 和 TangentOut 使用指定的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param {CurveTangent} tangentType 要计算的 TangentOut 和 TangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    ComputeTangents(tangentType: CurveTangent): void

    /**
     * 为 TangentOut 和 TangentIn 使用不同的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param {CurveTangent} tangentInType 要计算的 TangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param {CurveTangent} tangentOutType 要计算的 TangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     */
    ComputeTangents(tangentInType: CurveTangent, tangentOutType: CurveTangent): void

    /**
     * 查找曲线上某个位置的值。
     * @param {Number} position 曲线上的位置。
     * @returns {Number}
     */
    Evaluate(position: Number): Number

    /**
     * 获取当前实例的类型。
     * @returns {Curve}
     */
    GetType(): Curve
}

export default Curve;