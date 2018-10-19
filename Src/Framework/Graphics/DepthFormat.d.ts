import Enum from '../../Core/Enum.js';

/**
 * 定义深度蒙板缓冲区中的数据格式。
 * @public
 * @enum
 * @extends Enum
 */
class DepthFormat extends Enum {
    /**
     * 包含 16 位深度数据的缓冲区。
     * @returns {DepthFormat}
     */
    static get Depth16(): DepthFormat

    /**
     * 包含 24 位深度数据的缓冲区。
     * @returns {DepthFormat}
     */
    static get Depth24(): DepthFormat

    /**
     * 包含 24 位深度数据和 8 位蒙板数据的 32 位缓冲区。
     * @returns {DepthFormat}
     */
    static get Depth24Stencil8(): DepthFormat

    /**
     * 不创建深度缓冲区。
     * @returns {DepthFormat}
     */
    static get None(): DepthFormat
}

export default DepthFormat;