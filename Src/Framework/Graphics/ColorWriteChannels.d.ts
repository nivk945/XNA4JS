import Enum from '../../Core/Enum.js';

/**
 * 定义可用于逐通道写入渲染目标颜色缓冲区的颜色通道。
 * @public
 * @enum
 * @extends Enum
 */
class ColorWriteChannels extends Enum {
    /**
     * 所有缓冲区通道。
     * @returns {ColorWriteChannels}
     */
    static get All(): ColorWriteChannels

    /**
     * 缓冲区的 Alpha 通道。
     * @returns {ColorWriteChannels}
     */
    static get Alpha(): ColorWriteChannels

    /**
     * 缓冲区的蓝色通道。
     * @returns {ColorWriteChannels}
     */
    static get Blue(): ColorWriteChannels

    /**
     * 缓冲区的绿色通道。
     * @returns {ColorWriteChannels}
     */
    static get Green(): ColorWriteChannels

    /**
     * 未选择通道。
     * @returns {ColorWriteChannels}
     */
    static get None(): ColorWriteChannels

    /**
     * 缓冲区的红色通道。
     * @returns {ColorWriteChannels}
     */
    static get Red(): ColorWriteChannels
}

export default ColorWriteChannels;