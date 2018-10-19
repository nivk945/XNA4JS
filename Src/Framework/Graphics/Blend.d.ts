import Enum from '../../Core/Enum.js';

/**
 * 定义颜色混合系数。
 * @public
 * @enum
 * @extends Enum
 */
class Blend extends Enum {
    /**
     * 颜色的每个部分都乘以 BlendFactor 中设置的常量。
     * @returns {Blend}
     */
    static get BlendFactor(): Blend

    /**
     * 颜色的每个部分都乘以目标的 alpha 值。这可以表示为 (Ad, Ad, Ad, Ad)，其中 Ad 是目标 alpha 值。
     * @returns {Blend}
     */
    static get DestinationAlpha(): Blend

    /**
     * 每个颜色部分都乘以目标颜色。这可以表示为 (Rd, Gd, Bd, Ad)，其中 R、G、B 和 A 分别代表红色、绿色、蓝色和 alpha 目标值。
     * @returns {Blend}
     */
    static get DestinationColor(): Blend

    /**
     * 颜色的每个部分都乘以 BlendFactor 中所设常量的相反值。
     * @returns {Blend}
     */
    static get InverseBlendFactor(): Blend

    /**
     * 颜色的每个部分都乘以目标的 alpha 值的相反值。这可以表示为 (1 − Ad, 1 − Ad, 1 − Ad, 1 − Ad)，其中 Ad 是 alpha 目标值。
     * @returns {Blend}
     */
    static get InverseDestinationAlpha(): Blend

    /**
     * 颜色的每个部分都乘以目标颜色的反色。这可以表示为 (1 − Rd, 1 − Gd, 1 − Bd, 1 − Ad)，其中 Rd、Gd、Bd 和 Ad 分别代表红色、绿色、蓝色和 alpha 目标值。
     * @returns {Blend}
     */
    static get InverseDestinationColor(): Blend

    /**
     * 颜色的每个部分都乘以源的 alpha 值的相反值。这可以表示为 (1 − As, 1 − As, 1 − As, 1 − As)，其中 As 是 alpha 目标值。
     * @returns {Blend}
     */
    static get InverseSourceAlpha(): Blend

    /**
     * 颜色的每个部分都乘以源颜色的反色。这可以表示为 (1 − Rs, 1 − Gs, 1 − Bs, 1 − As)，其中 R、G、B 和 A 分别代表红色、绿色、蓝色和 alpha 目标值。
     * @returns {Blend}
     */
    static get InverseSourceColor(): Blend

    /**
     * 颜色的每个部分都乘以 (1, 1, 1, 1)。
     * @returns {Blend}
     */
    static get One(): Blend

    /**
     * 颜色的每个部分都乘以源的 alpha 值。这可以表示为 (As, As, As, As)，其中 As 是 alpha 源值。
     * @returns {Blend}
     */
    static get SourceAlpha(): Blend

    /**
     * 颜色的每个部分都乘以源颜色的 alpha 值或源颜色的 alpha 值的相反值，以数值较大者为准。这可以表示为 (f, f, f, 1)，其中 f = min(A, 1 − Ad)。
     * @returns {Blend}
     */
    static get SourceAlphaSaturation(): Blend

    /**
     * 颜色的每个部分都乘以源颜色。这可以表示为 (Rs, Gs, Bs, As)，其中 R、G、B 和 A 分别代表红色、绿色、蓝色和 alpha 源值。
     * @returns {Blend}
     */
    static get SourceColor(): Blend

    /**
     * 颜色的每个部分都乘以 (0, 0, 0, 0)。
     * @returns {Blend}
     */
    static get Zero(): Blend
}

export default Blend;