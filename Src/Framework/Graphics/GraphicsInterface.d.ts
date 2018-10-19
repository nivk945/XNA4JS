import Enum from '../../Core/Enum.js';

/**
 * [非XNA4.0标准]指示图形适配器所使用的图形接口。
 * @public
 * @enum
 * @extends Enum
 */
class GraphicsInterface extends Enum {
    /**
     * 表示不使用任何已有的 Web 图形标准。
     * @returns {GraphicsInterface}
     */
    static get None(): GraphicsInterface

    /**
     * 表示使用 Khronos Group 提交的 WebGL1.0 图形标准。
     * @returns {GraphicsInterface}
     */
    static get WebGL(): GraphicsInterface

    /**
     * 表示使用 Khronos Group 提交的 WebGL2.0 图形标准。
     * @returns {GraphicsInterface}
     */
    static get WebGL2(): GraphicsInterface

    /**
     * 表示使用 Apple 公司的 WebKit 团队提交的 WebGPU 图形标准。
     * @returns {GraphicsInterface}
     */
    static get WebGPU(): GraphicsInterface

    /**
     * [未实施]表示使用 Mozilla 基金会提交给 Khronos Group 的 Obsidian 图形标准。
     * @returns {GraphicsInterface}
     */
    static get Obsidian(): GraphicsInterface

    /**
     * 获取当前实例的类型。
     * @returns {GraphicsInterface}
     */
    GetType(): GraphicsInterface
}

export default GraphicsInterface;