import Enum from '../../Core/Enum.js';

/**
 * 定义蒙板缓冲操作。
 * @public
 * @enum
 * @extends Enum
 */
class StencilOperation extends Enum {
    /**
     * 减少蒙板缓冲区项目，在新值小于零时转到最大值。
     * @returns {StencilOperation}
     */
    static get Decrement(): StencilOperation

    /**
     * 减少蒙板缓冲区项目，固定到 0。
     * @returns {StencilOperation}
     */
    static get DecrementSaturation(): StencilOperation

    /**
     * 增加蒙板缓冲区项目，在新值超过最大值时转到零。
     * @returns {StencilOperation}
     */
    static get Increment(): StencilOperation

    /**
     * 增加蒙板缓冲区项目，固定到最大值。
     * @returns {StencilOperation}
     */
    static get IncrementSaturation(): StencilOperation

    /**
     * 反转蒙板缓冲区项目中的位。
     * @returns {StencilOperation}
     */
    static get Invert(): StencilOperation

    /**
     * 不会更新蒙板缓冲区项目。这是默认值。
     * @returns {StencilOperation}
     */
    static get Keep(): StencilOperation

    /**
     * 用引用值替换蒙板缓冲区项目。
     * @returns {StencilOperation}
     */
    static get Replace(): StencilOperation

    /**
     * 将蒙板缓冲区项目设置为 0。
     * @returns {StencilOperation}
     */
    static get Zero(): StencilOperation
}

export default StencilOperation;