import Enum from '../../Core/Enum.js';

/**
 * 指定缓冲区内容的专门用途。
 * @public
 * @enum
 * @extends Enum
 */
class BufferUsage extends Enum {
    /**
     * 无
     * @returns {BufferUsage}
     */
    static get None(): BufferUsage

    /**
     * 指示应用程序仅向顶点缓冲区写入数据。如果已经指定，驱动程序将选择最佳内存位置以实现高效写入和渲染。尝试读取只写顶点缓冲区失败。
     * @returns {BufferUsage}
     */
    static get WriteOnly(): BufferUsage
}

export default BufferUsage;