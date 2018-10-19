import Enum from '../Core/Enum.js';

/**
 * 指定要为 Curve 中的 CurveKey 点计算的不同切线类型。
 * @public
 * @enum
 * @extends Enum
 */
class CurveTangent extends Enum {
    /**
     * Flat 切线始终具有一个零值。
     */
    static get Flat(): CurveTangent

    /**
     * CurveKey 的 Linear 切线相当于其 Value 和之前/之后 CurveKey 的 Value 之间的差值。 例如在 Curve MyCurve 中，i 大于零，而 (i + 1) 小于 MyCurve 中 CurveKeys 的总数，则 MyCurve.Keys[i] 的线性 TangentIn 等于： ( MyCurve.Keys[i].Value - MyCurve.Keys[i - 1].Value ) 同样，线性 TangentOut 等于： ( MyCurve.Keys[i + 1].Value - MyCurve.Keys[i].Value.)
     */
    static get Linear(): CurveTangent

    /**
     * Smooth 切线可借助 CurveKey 相邻处的值来平滑处理 TangentIn 和 TangentOut 之间的变形。 MyCurve.Keys[i] 的平滑 TangentIn 等于： ( ( MyCurve.Keys[i + 1].Value - MyCurve.Keys[i - 1].Value ) * ( ( MyCurve.Keys[i].Position - MyCurve.Keys[i - 1].Position ) / ( MyCurve.Keys[i + 1].Position - MyCurve.Keys[i-1].Position ) ) ) 同样，平滑 TangentOut 等于： ( ( MyCurve.Keys[i + 1].Value - MyCurve.Keys[i - 1].Value ) * ( ( MyCurve.Keys[i + 1].Position - MyCurve.Keys[i].Position ) / ( MyCurve.Keys[i + 1].Position - MyCurve.Keys[i - 1].Position ) ) )
     */
    static get Smooth(): CurveTangent

    /**
     * 获取当前实例的类型。
     * @returns {CurveTangent}
     */
    GetType(): CurveTangent
}

export default CurveTangent;