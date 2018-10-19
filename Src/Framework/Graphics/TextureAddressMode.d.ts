import Enum from '../../Core/Enum.js';

/**
 * 使用 0.0 至 1.0 典型范围之外的纹理坐标定义纹素的寻址模式。
 * @public
 * @enum
 * @extends Enum
 */
class TextureAddressMode extends Enum {
    /**
     * 将范围 [0.0, 1.0] 之外的纹理坐标分别设置为位于 0.0 或 1.0 的纹理颜色。
     * @returns {TextureAddressMode}
     */
    static get Clamp(): TextureAddressMode

    /**
     * 与 Wrap 类似，除纹理在每个整数连接处翻转外。例如，对于介于 0 到 1 之间的 u 值，纹理可以正常进行寻址；对于介于 1 到 2 之间的值，纹理进行翻转（镜像）；对于介于 2 到 3 之间的值，纹理再次正常，依此类推。
     * @returns {TextureAddressMode}
     */
    static get Mirror(): TextureAddressMode

    /**
     * 在每个整数连接处平铺纹理。例如，对于介于 0 到 3 之间的 u 值，纹理会重复三次；但不执行镜像。
     * @returns {TextureAddressMode}
     */
    static get Wrap(): TextureAddressMode
}

export default TextureAddressMode;