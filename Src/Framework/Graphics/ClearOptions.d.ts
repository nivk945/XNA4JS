import Enum from '../../Core/Enum.js';

/**
 * 指定调用 Clear 时使用的缓冲区。
 * @public
 * @enum
 * @extends Enum
 */
class ClearOptions extends Enum {
    /**
     * 深度缓冲区。
     * @returns {ClearOptions}
     */
    static get DepthBuffer(): ClearOptions

    /**
     * 蒙板缓冲区。
     * @returns {ClearOptions}
     */
    static get Stencil(): ClearOptions

    /**
     * 渲染目标。
     * @returns {ClearOptions}
     */
    static get Target(): ClearOptions
}

export default ClearOptions;