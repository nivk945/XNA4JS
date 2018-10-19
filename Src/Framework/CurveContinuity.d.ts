import Enum from '../Core/Enum.js';

/**
 * 定义 Curve 上 CurveKeys 的连续性。
 * @public
 * @enum
 * @extends Enum
 */
class CurveContinuity extends Enum {
    /**
     * 可以在两个连续的 CurveKey 之间使用插值。
     */
    static get Smooth(): CurveContinuity

    /**
     * 不能在两个连续的 CurveKey 之间使用插值。指定两点间的位置会返回该点。
     */
    static get Step(): CurveContinuity

    /**
     * 获取当前实例的类型。
     * @returns {CurveContinuity}
     */
    GetType(): CurveContinuity
}

export default CurveContinuity;