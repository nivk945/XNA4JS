import Enum from '../../Core/Enum.js';

/**
 * 介绍 SetData 操作过程中是覆盖还是丢弃现有顶点或索引缓冲区数据。
 * @public
 * @enum
 * @extends Enum
 */
class SetDataOptions extends Enum {
    /**
     * SetData 操作将会丢弃整个缓冲区。将会返回指向新内存区域的指针，以便直接内存访问 (DMA) 和以前区域中的渲染不会停止。
     * @returns {SetDataOptions}
     */
    static get Discard(): SetDataOptions

    /**
     * 该操作过程中可能会覆盖缓冲区中的部分现有数据。
     * @returns {SetDataOptions}
     */
    static get None(): SetDataOptions

    /**
     * SetData 操作将不会覆盖顶点和索引缓冲区中的现有数据。通过指定此选项，驱动程序可以立即从 SetData 操作中返回并继续渲染。
     * @returns {SetDataOptions}
     */
    static get NoOverwrite(): SetDataOptions
}

export default SetDataOptions;