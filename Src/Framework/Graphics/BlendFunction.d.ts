import Enum from '../../Core/Enum.js';

/**
 * 定义如何将源颜色与颜色混合的渲染目标中已经存在的目标颜色相结合。
 * @public
 * @enum
 * @extends Enum
 */
class BlendFunction extends Enum {
    /**
     * 最终结果为目标颜色加源颜色。 Result = (Source Color * Source Blend) + (Destination Color * Destination Blend)
     * @returns {BlendFunction}
     */
    static get Add(): BlendFunction

    /**
     * 最终结果为源颜色和目标颜色的最大值。 Result = max( (Source Color * Source Blend), (Destination Color * Destination Blend) )
     * @returns {BlendFunction}
     */
    static get Max(): BlendFunction

    /**
     * 最终结果为源颜色和目标颜色的最小值。 Result = min( (Source Color * Source Blend), (Destination Color * Destination Blend) )
     * @returns {BlendFunction}
     */
    static get Min(): BlendFunction

    /**
     * 最终结果为目标颜色减去源颜色。 Result = (Destination Color * Destination Blend) − (Source Color * Source Blend)
     * @returns {BlendFunction}
     */
    static get ReverseSubtract(): BlendFunction

    /**
     * 最终结果为源颜色减去目标颜色。 Result = (Source Color * Source Blend) − (Destination Color * Destination Blend)
     * @returns {BlendFunction}
     */
    static get Subtract(): BlendFunction
}

export default BlendFunction;