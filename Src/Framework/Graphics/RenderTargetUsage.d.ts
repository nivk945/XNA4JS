import Enum from '../../Core/Enum.js';

/**
 * 确定在设置了新的渲染目标之后如何使用渲染目标数据。
 * @public
 * @enum
 * @extends Enum
 */
class RenderTargetUsage extends Enum {
    /**
     * 始终清理渲染目标数据。
     * @returns {RenderTargetUsage}
     */
    static get DiscardContents(): RenderTargetUsage

    /**
     * 根据当前平台清理或者保留数据。在 Xbox 360 上，渲染目标将丢弃内容。在 PC 上，如果启用多重取样，则渲染目标将丢弃内容，否则将保留内容。
     * @returns {RenderTargetUsage}
     */
    static get PlatformContents(): RenderTargetUsage

    /**
     * 始终保留渲染目标数据。
     * @returns {RenderTargetUsage}
     */
    static get PreserveContents(): RenderTargetUsage
}

export default RenderTargetUsage;